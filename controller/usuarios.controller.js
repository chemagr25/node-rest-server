const { response, request } = require('express');

  const usuariosGet = (req = request, res = response) => {
    const {hola = "adios", nombre = "no name"} =  req.query;
    
    res.json({
        msg: ' GET API -- Controller',
        hola,
        nombre

    })
  }
  const usuarioPost = (req = request, res = response) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'POST API -- Controller',
        nombre,
        edad
    })
  }

  const usuarioPut = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg: 'PUT API -- Controller',
        id
    })
  }

  const usuarioPatch = (req, res = response) => {
    res.json({
        msg: 'PATCH API -- Controller'
    })
  }

  const usuarioDelete = (req, res = response) => {
    
    res.json({
        msg: 'DELETE API -- Controller'
    })
  }




  module.exports = {
    usuariosGet,
    usuarioPut,
    usuarioPatch,
    usuarioDelete,
    usuarioPost,
  }