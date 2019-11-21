namespace CaixaEltronico.Api.Models
{
    public class HttpResponseModel
    {
        public int Status { get; set; }

        public string Mensagem { get; set; }

        public string MensagemInterna { get; set; }

        public dynamic Content { get; set; }
    }
}