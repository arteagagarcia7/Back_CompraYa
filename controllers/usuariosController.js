const Usuario = require("../models/usuario");
const bcryptsjs = require("bcryptjs");

exports.crearUsuario = async(req, res) =>{
    //console.log(req.body);
    const {password, email} = req.body;
    
    try{
        // revisar que sea un unico correo
        let usuario = await Usuario.findOne({email});

        if (usuario){
            return res.status(400).json({msg: "el usuario ya existe"})
        }
        
        //crear nuevo usuario
        usuario = new Usuario(req.body);

        //hash
        usuario.password = await bcryptsjs.hash(password, 10);

        //Guardar usuario en la Base de Datos (BD)
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado)

    }catch(error){
        console.log(error);
    }
};