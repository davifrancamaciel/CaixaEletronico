using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CaixaEltronico.Dominio;
using CaixaEltronico.Dao;
using CaixaEltronico.Api.Models;
using Newtonsoft.Json;
using System.Linq;

namespace CaixaEltronico.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseController : ControllerBase
    {
        // GET api/values
        protected HttpResponseModel SucessoResponseModel(string mensagem)
        {
            return new HttpResponseModel()
            {
                Mensagem = mensagem,
                MensagemInterna = "",
                Status = 200
            };
        }

        protected HttpResponseModel SucessoResponseModel(string mensagem, dynamic conteudo)
        {
            return new HttpResponseModel()
            {
                Mensagem = mensagem,
                MensagemInterna = "",
                Status = 200,
                Content = conteudo
            };
        }
        protected HttpResponseModel ExceptionResponseModel(Exception exception, dynamic conteudo)
        {
            return new HttpResponseModel()
            {
                Mensagem = exception.Message + (exception.InnerException != null ? "Detalhes : " + exception.InnerException.Message : ""),
                MensagemInterna = exception.StackTrace,
                Status = 500,
                Content = conteudo
            };
        }
    }
}
