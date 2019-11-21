using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CaixaEltronico.Dominio;
using CaixaEltronico.Dao;
using CaixaEltronico.Api.Models;
using Newtonsoft.Json;

namespace CaixaEltronico.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RetiradaController : BaseController
    {
        // GET api/values
        [HttpGet]
        public HttpResponseModel Get()
        {
            var contaDao = new ContaDao();
            var conta = contaDao.ObterConta();

            return base.SucessoResponseModel("", conta);
        }

        // POST api/values
        [HttpPost]
        public HttpResponseModel Post(RetiradaModel model)
        {
            try
            {
                var contaDao = new ContaDao();
                var conta = contaDao.ObterConta();
                if (Convert.ToDecimal(model.Valor) > conta.Saldo)
                    return base.SucessoResponseModel("Saldo insuficiente");


                var cedulaDao = new CedulaDao();
                var listaCedulas = cedulaDao.ListarCedulas()
                    .Where(x => x.Disponivel == true)
                    .OrderByDescending(x => x.Valor).ToList();

                var resultado = new ResutadoModel();
                resultado.Cedulas = new List<CedulaResutadoModel>();
                resultado = calculaNotasParaSaque(model.Valor, 0, resultado, listaCedulas);
                if (resultado.Resto == 0)
                {
                    resultado.Saldo = conta.Saldo - Convert.ToDecimal(model.Valor);
                    return base.SucessoResponseModel("Retitada realizada com sucesso", resultado);
                }
                else
                {
                    int valor = model.Valor == 1 ? 2 : model.Valor - resultado.Resto;
                    return base.SucessoResponseModel(
                        string.Format("Não será possível sacar este valor com as notas disponíveis. O valor mais próximo é {0}", valor));
                }


            }
            catch (Exception e)
            {
                return base.ExceptionResponseModel(e, "Erro ao efetuar saque.");
            }
        }

        private ResutadoModel calculaNotasParaSaque(int valor, int tentativa, ResutadoModel resultado, List<Cedulas> listaCedulas)
        {

            if (tentativa == listaCedulas.Count())
            {
                resultado.Resto = valor;
                return resultado;
            }

            int cedulaValor = listaCedulas[tentativa].Valor;
            int divisao = Convert.ToInt32(valor / cedulaValor);
            if (divisao > 0)
            {
                valor -= divisao * cedulaValor;
                var cedula = new CedulaResutadoModel
                {
                    Quantidade = divisao,
                    Valor = cedulaValor
                };
                resultado.Cedulas.Add(cedula);
            }
            tentativa++;
            return calculaNotasParaSaque(valor, tentativa, resultado, listaCedulas);
        }

    }
}
