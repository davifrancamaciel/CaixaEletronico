using System;
using CaixaEltronico.Dominio;
using System.Collections.Generic;

namespace CaixaEltronico.Dao
{
    public class CedulaDao
    {
        public List<Cedulas> ListarCedulas()
        {
            var lista = new List<Cedulas>();
            lista.Add(new Cedulas { Id = 1, Valor = 2, Disponivel = true });
            lista.Add(new Cedulas { Id = 2, Valor = 5, Disponivel = true });
            lista.Add(new Cedulas { Id = 3, Valor = 10, Disponivel = true });
            lista.Add(new Cedulas { Id = 4, Valor = 20, Disponivel = true });
            lista.Add(new Cedulas { Id = 5, Valor = 50, Disponivel = false });
            lista.Add(new Cedulas { Id = 6, Valor = 100, Disponivel = true });
            return lista;
        }
    }
}
