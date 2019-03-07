# RESUMO SOBRE A UTILIZAÇÃO DA API:
- API (MERN CRUD) foi criada  para mostrar a integração entre BACKEND / FRONTEND!
- A criação desta API, é para fins de estudos!

# RESUMO SOBRE CRIAÇÃO DA API:
#### API criada em:
- BACKEND: NODEJS, EXPRESS;
Dependências:
Express;
Mongoose;
Concurrently;

- BANCO DE DADOS: MONGODB (NOSQL);
Utiliza banco de dados online (MLAB);
Criação de models;

- FRONTEND: REACTJS;
Dependências:
Axios;
React-router-dom;
Bootstrap;
React-bootstrap;

#### INSTALAR:

1 - Obtenha o código fonte:

$ git clone https://github.com/diegoorocha/API-MERN---MONGO-EXPRESS-REACT-NODE.git

2 - Mude para o seu diretório:

$ cd API-MERN---MONGO-EXPRESS-REACT-NODE

3 - Execute o comando YARN INSTALL, ele irá instalar todas as dependências:

$ yarn install

4 - Execute o comando YARN START, ele irá executar o projeto:

$ yarn dev 
OBS: Ao executar o comando acima (yarn dev), o mesmo vai utilizar o CONCURRENTLY para conectar o SERVIDOR (BACKEND) e o CLIENT (FRONTEND)!
![image](https://user-images.githubusercontent.com/46031435/53960026-e7025180-40c3-11e9-91a5-a04aeabd5cf0.png)



# FUNÇÕES DA API:
- Registrar novo usuário;
![image](https://user-images.githubusercontent.com/46031435/53960684-ac99b400-40c5-11e9-9d7c-77fabc833038.png)

POST: http://localhost:3000/create

- Listar usuários criados;
![image](https://user-images.githubusercontent.com/46031435/53960982-55e0aa00-40c6-11e9-9e8d-ee3fac7d6a39.png)

GET: http://localhost:3000/

- Atualizar usuário (id);
![image](https://user-images.githubusercontent.com/46031435/53961128-a6580780-40c6-11e9-9c52-a20d2e0d4dd1.png)
OBS: Note que a alteração foi realizada no campo FILIAL, onde o inicial era (SÃO PAULO), alterando para (CAMPINAS).

- Deletar usuário (id);
![image](https://user-images.githubusercontent.com/46031435/53961680-f4b9d600-40c7-11e9-9c59-63db1ceb4e14.png)

OBS: Ao tentar excluir um usuário, para evitar problemas ao clicar sem querer, a confirmação será feita via MODAL!

OBS1: Ao clicar em NÃO, a operação é cancelada e o usuário não é excluido.

OBS2: Ao clicar em EXCLUIR, o usuário é excluido!

------------

