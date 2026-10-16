# Loja API

API REST em JavaScript com Express e Supabase.

## Executar

```powershell
npm install
npm start
```

Configure `URL_API` e `API_KEY` no arquivo `.env` com os dados do seu projeto Supabase. Use a chave `anon`/publishable adequada para as políticas RLS configuradas na tabela; não coloque uma chave `service_role` no cliente ou em arquivos versionados.

A API espera uma tabela `fornecedores` com as colunas `id`, `nome`, `cnpj`, `email` e `telefone`.

## Endpoints

- `GET /fornecedores`: lista fornecedores.
- `POST /fornecedores`: cria um fornecedor com `nome`, `cnpj`, `email` e `telefone` no corpo JSON.
- `GET /fornecedores/:id`: retorna o fornecedor com o ID informado.
