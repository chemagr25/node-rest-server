const { Router } = require('express');
const { usuariosGet, 
  usuarioPut, 
  usuarioPost, 
  usuarioDelete, 
  usuarioPatch } = require('../controller/usuarios.controller');



const router = Router();

router.get( '/' , usuariosGet );

router.post( '/', usuarioPost );

router.put( '/:id', usuarioPut );

router.patch( '/', usuarioPatch );

router.delete('/', usuarioDelete )


module.exports = router