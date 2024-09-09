# Resumo
  O **Gerenciamento de Tarefas** é uma Rest API onde tem como finalidade organizar as tarefas do dia a dia. Esta API permite que fazer diversas manimulações, sejam elas, criar um usuário, criar tarefas, listar ambos, editar e deletar, tanto na parte de usuário como em tarefas, além de ser possível fazer login.

# Tecnologias utilizadas
- Node.js,
- Express,
- Body-parser,
- JWT,
- Bcrypt,
- Prisma,
- Sqlite

# Rotas para requisições
**Users**
- POST: http://localhost:3333/login  essa rota é responsavel pelo login,

- GET: http://localhost:3333/users  essa rota lista todos os usuários cadastrados,

- GET: http://localhost:3333/search/:id  essa rota retorna o usuário de acordo com o ID,

- POST: http://localhost:3333/users  essa rota cria um novo usuário,

- PUT: http://localhost:3333/users/edit/:id  essa rota edita usuários,

- DELETE: http://localhost:3333/users/delete/:id  essa rota deleta usuários,

**Tarefas**

- GET: http://localhost:3333/tarefas/list  essa rota lista todas as tarefas cadastradas,


- GET: http://localhost:3333/tarefas/:id  essa rota retorna a tarefa de acordo com o ID,

- GET: http://localhost:3333/tarefas  essa rota lista todas as tarefas de acortdo com o estado que ela se encontra,

- POST: http://localhost:3333/tarefas  essa rota cria um novo usuário,

- PUT: http://localhost:3333/tarefas/:id  essa rota edita tarefa,

- DELETE: http://localhost:3333/tarefas/:id  essa rota deleta tarefa,

**Como clonar o projeto**
Para clonar esse projeto, basta abrir o terminal do PC, vai até o local que deseja salvar esse projeto e digite o comando abaixo.

Segue o comando:
- git clone URL do projeto

Depois digite no terminal o seguinte comando:
- npm i
ou
- yarn

Para iniciar o servidor digite no terminal o seguinte comando:
- npm run dev
ou
- yarn dev