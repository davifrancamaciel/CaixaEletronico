using System;
using CaixaEltronico.Dominio;
using System.Collections.Generic;

namespace CaixaEltronico.Dao
{
    public class ContaDao
    {
        public Conta ObterConta()
        {
            return new Conta { Id = 1, Saldo = 1300.35m };
        }
    }
}
