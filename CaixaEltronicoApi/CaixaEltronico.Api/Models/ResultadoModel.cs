using System.Collections.Generic;
namespace CaixaEltronico.Api.Models
{
    public class ResutadoModel
    {
        public decimal Saldo { get; set; }
        public int Resto { get; set; }
        public List<CedulaResutadoModel> Cedulas { get; set; }
    }

    public class CedulaResutadoModel
    {
        public int Valor { get; set; }
        public int Quantidade { get; set; }
    }
}