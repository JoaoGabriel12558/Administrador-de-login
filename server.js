const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configurações básicas
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'segredo',
  resave: false,
  saveUninitialized: true
}));

// Importa as rotas de autenticação
const authRoutes = require('./routes/auth');
app.use('/', authRoutes);

// Rota principal (login)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota protegida (painel)
app.get('/painel', (req, res) => {
  if (!req.session.usuario) return res.redirect('/');
  res.sendFile(path.join(__dirname, 'public', 'painel.html'));
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
