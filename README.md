🔐 Painel de Login com Cadastro de Usuários
Este projeto é um sistema simples de autenticação com cadastro, login, painel protegido e logout, desenvolvido com Node.js, Express, MySQL e HTML/CSS. Ideal para aprender conceitos de autenticação, sessões e integração com banco de dados.

✨ Funcionalidades
Cadastro de usuários com nome e senha
Login com verificação de credenciais
Painel protegido acessível apenas após autenticação
Logout com encerramento de sessão
Criptografia de senhas com bcrypt
Mensagens de erro e sucesso estilizadas
Interface moderna e responsiva
🛠 Tecnologias Utilizadas
Node.js
Express
MySQL
bcrypt
dotenv
express-session
HTML5 + CSS3
🚀 Instalação
1. Clone o repositório
git clonehttps://github.com/JoaoGabriel12558/Administrador-de-login.git
cd painel-login
2. Instale as dependências
bash
npm install
3. Configure o arquivo .env
Crie um arquivo .env na raiz do projeto com as credenciais do seu banco de dados MySQL:

env
DB_HOST=localhost  
DB_USER=root  
DB_PASS=sua_senha  
DB_NAME=painel
4. Crie o banco de dados e a tabela
Execute os comandos abaixo no MySQL:

sql
CREATE DATABASE painel;

USE painel;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL
);
5. Inicie o servidor
bash
node server.js
6. Acesse no navegador
Código
http://localhost:3000
📁 Estrutura de Pastas
Código
painel-login/
├── public/
│   ├── index.html        # Tela de login
│   ├── cadastro.html     # Tela de cadastro
│   ├── painel.html       # Painel protegido
│   ├── erro.html         # Página de erro estilizada
│   └── style.css         # Estilos visuais
│
├── routes/
│   ├── auth.js           # Lógica de login, cadastro e logout
│   └── db.js             # Conexão com o banco de dados MySQL
│
├── server.js             # Arquivo principal do servidor Express
├── .env                  # Variáveis de ambiente
└── README.md             # Documentação do projeto
🔒 Segurança
Senhas criptografadas com bcrypt antes de serem armazenadas

Sessões gerenciadas com express-session

Rota /painel protegida e redirecionamento automático para login se o usuário não estiver autenticado

👤 Autor
Desenvolvido por João Gabriel 📍 Rio de Janeiro, Brasil

📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e compartilhar.

📬 Contato
Se tiver dúvidas, sugestões ou quiser contribuir:

Abra uma issue aqui no GitHub

Ou entre em contato diretamente

Código

---

Se quiser, posso te ajudar a criar uma versão em inglês ou adicionar badges e links automáticos para deploy. Seu projeto está ficando top!
pode escrever tudo em codigo para copiar e colar
Claro, João! Aqui está o conteúdo completo do seu README.md formatado em Markdown, pronto para copiar e colar no GitHub:

markdown
# 🔐 Painel de Login com Cadastro de Usuários

Este projeto é um sistema simples de autenticação com cadastro, login, painel protegido e logout, desenvolvido com **Node.js**, **Express**, **MySQL** e **HTML/CSS**. Ideal para aprender conceitos de autenticação, sessões e integração com banco de dados.

---

## ✨ Funcionalidades

- Cadastro de usuários com nome e senha
- Login com verificação de credenciais
- Painel protegido acessível apenas após autenticação
- Logout com encerramento de sessão
- Criptografia de senhas com **bcrypt**
- Mensagens de erro e sucesso estilizadas
- Interface moderna e responsiva

---

## 🛠 Tecnologias Utilizadas

- Node.js  
- Express  
- MySQL  
- bcrypt  
- dotenv  
- express-session  
- HTML5 + CSS3  

---

## 🚀 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/painel-login.git
cd painel-login
2. Instale as dependências
bash
npm install
3. Configure o arquivo .env
Crie um arquivo .env na raiz do projeto com as credenciais do seu banco de dados MySQL:

env
DB_HOST=localhost  
DB_USER=root  
DB_PASS=sua_senha  
DB_NAME=painel
4. Crie o banco de dados e a tabela
Execute os comandos abaixo no MySQL:

sql
CREATE DATABASE painel;

USE painel;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL
);
5. Inicie o servidor
bash
node server.js
6. Acesse no navegador
Código
http://localhost:3000
📁 Estrutura de Pastas
Código
painel-login/
├── public/
│   ├── index.html        # Tela de login
│   ├── cadastro.html     # Tela de cadastro
│   ├── painel.html       # Painel protegido
│   ├── erro.html         # Página de erro estilizada
│   └── style.css         # Estilos visuais
│
├── routes/
│   ├── auth.js           # Lógica de login, cadastro e logout
│   └── db.js             # Conexão com o banco de dados MySQL
│
├── server.js             # Arquivo principal do servidor Express
├── .env                  # Variáveis de ambiente
└── README.md             # Documentação do projeto
🔒 Segurança
Senhas criptografadas com bcrypt antes de serem armazenadas

Sessões gerenciadas com express-session

Rota /painel protegida e redirecionamento automático para login se o usuário não esti
ver autenticado

👤 Autor
Desenvolvido por João Gabriel 📍 Rio de Janeiro, Brasil

📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e compartilhar.

📬 Contato
Se tiver dúvidas, sugestões ou quiser contribuir:

Abra uma issue aqui no GitHub

email: joao12558joao@gmail.com