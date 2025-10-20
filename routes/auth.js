const express = require('express');
const bcrypt = require('bcrypt');
const conn = require('../db');
const router = express.Router();

// Rota de cadastro de usuário
router.post('/cadastrar', (req, res) => {
  const { usuario, senha } = req.body;

  bcrypt.hash(senha, 10, (err, hash) => {
    if (err) return res.send('Erro ao criptografar senha.');

    conn.query('INSERT INTO usuarios (usuario, senha) VALUES (?, ?)', [usuario, hash], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.send('Usuário já existe.');
        }
        return res.send('Erro ao cadastrar usuário.');
      }
      res.send('Usuário cadastrado com sucesso!');
    });
  });
});

// Rota de login
router.post('/login', (req, res) => {
  const { usuario, senha } = req.body;

  conn.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario], (err, results) => {
    if (err) return res.send('Erro na consulta.');

    if (results.length === 0) {
      return res.send('Usuário não encontrado.');
    }

    const hash = results[0].senha;
    bcrypt.compare(senha, hash, (err, match) => {
      if (match) {
        req.session.usuario = usuario;
        res.redirect('/painel');
      } else {
        res.send('Senha incorreta.');
      }
    });
  });
});

// Rota de logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;