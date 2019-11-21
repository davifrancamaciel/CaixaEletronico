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
    public class CedulasController : BaseController
    {
        // GET api/values
        [HttpGet]
        public HttpResponseModel Get()
        {

            var cedulaDao = new CedulaDao();
            var listaCedulas = cedulaDao.ListarCedulas().Where(x => x.Disponivel == true);

            return base.SucessoResponseModel("", listaCedulas);
        }
    }
}
