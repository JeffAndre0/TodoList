# Projeto Lista de Tarefas

## Descrição

Este projeto é uma lista de tarefas desenvolvida para ajudá-lo a organizar suas atividades, tendo a opção de informar o Responsável pela tarefa, o prazo e a prioridade, todos sendo opcionais. Ele consiste em um frontend em Angular e um backend em ASP.NET Core.

## Configuração do Banco de Dados

O script inicial do banco de dados está localizado no arquivo `initdb.sql` na pasta `Database`. Para configurar o banco de dados, execute este script em seu banco de dados PostgreSQL.

## Configuração do Backend

A string de conexão do banco de dados está localizada no arquivo `appsettings.json` na pasta `Back`. Certifique-se de ajustar esta string de conexão de acordo com as configurações do seu ambiente antes de iniciar o projeto backend.

Para executar o projeto backend, siga estas etapas:

1. Navegue até a pasta `Back` no terminal.
2. Execute o seguinte comando:

`dotnet run`

Isso iniciará o servidor backend.


## Configuração do Frontend

A URL da API deve ser configurada no arquivo `environment.ts` na pasta `Front/src/environments`. Certifique-se de ajustar esta URL para apontar para o servidor backend antes de iniciar o projeto frontend.

Para executar o projeto frontend, siga estas etapas:

1. Navegue até a pasta `Front` no terminal.
2. Execute o seguinte comando:

`ng serve`

Isso iniciará o servidor de desenvolvimento do Angular.

