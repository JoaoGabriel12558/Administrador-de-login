🔐 Painel de Login com Cadastro de Usuários
Este projeto é um sistema simples de autenticação com cadastro, login, painel protegido e logout, desenvolvido com Node.js, Express, MySQL e HTML/CSS. Ideal para aprender conceitos de autenticação, sessões e integração com banco de dados.

Funcionalidades
O sistema permite que usuários se cadastrem com nome de usuário e senha, façam login com verificação de credenciais, acessem um painel protegido apenas após autenticação e encerrem a sessão com logout. As senhas são criptografadas com bcrypt e as mensagens de erro e sucesso são exibidas de forma estilizada. A interface é moderna e responsiva.

Tecnologias utilizadas
Node.js

Express

MySQL

bcrypt

dotenv

express-session

HTML5 + CSS3

Instalação
Clone o repositório: git clone https://github.com/seu-usuario/painel-login.git cd painel-login

Instale as dependências: npm install

Crie um arquivo .env na raiz do projeto com as credenciais do seu banco de dados MySQL:

Código
DB_HOST=localhost  
DB_USER=root  
DB_PASS=sua_senha  
DB_NAME=painel


Crie o banco de dados e a tabela no MySQL:

Código
CREATE DATABASE painel;

USE painel;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL
);


Inicie o servidor: node server.js

Acesse no navegador: http://localhost:3000

Estrutura de pastas
O projeto está organizado da seguinte forma:

public/ – Contém os arquivos HTML e CSS:

index.html – Tela de login

cadastro.html – Tela de cadastro

painel.html – Painel protegido

erro.html – Página de erro estilizada

style.css – Estilos visuais

routes/ – Contém as rotas de autenticação:

auth.js – Lógica de login, cadastro e logout

db.js – Conexão com o banco de dados MySQL

server.js – Arquivo principal do servidor Express

.env – Variáveis de ambiente

README.md – Documentação do projeto

Segurança
As senhas são criptografadas com bcrypt antes de serem armazenadas no banco de dados. As sessões são gerenciadas com express-session, garantindo que apenas usuários autenticados possam acessar o painel. A rota /painel é protegida e redireciona para o login caso o usuário não esteja autenticado.

Autor
Desenvolvido por João Gabriel 📍 Rio de Janeiro, Brasil

Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e compartilhar.

Contato
Se tiver dúvidas, sugestões ou quiser contribuir, fique à vontade para abrir uma issue ou entrar em contato.