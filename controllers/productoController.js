//const { where } = require("../models/producto");
const producto = require ("../models/producto");

exports.leerProductoHome = async (req, res) =>{
    try{
        const producto1 = await producto.find();
        res.json({producto1});
    }catch(error){
        console.log(error);
    }
};

exports.leerProducto = async (req, res) =>{
    
    const {id} =req.params;
    const producto1 = await producto.find().where("categoriaId").equals(id);
    res.json(producto1);
};

exports.crearProducto = async (req, res) =>{
    
    try{
        const producto1 = new producto (req.body);
        producto1.save();
        res.json(producto1)
    }catch(error){
        console.log(error);
    }
};

exports.actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const producto = await Producto.findById(id);

    if(!producto){
        return res.status(400).json({ msg: "producto no encontrado"});
    }

    /*if(producto.categoriaId.toString() !== req.categoria.id.toString()){
        return res.status(400).json({ msg: "acción no valida para este usuario"});
    }*/

    producto.nombre = req.body.nombre || producto.nombre;
    producto.descripcion = req.body.descripcion || producto.descripcion;
    producto.stock = req.body.stock || producto.stock;
    producto.precio = req.body.precio || producto.precio;
    producto.imagen = req.body.imagen || producto.imagen;
    producto.save();
    res.json({ Producto });
};

exports.borrarProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({ msg: "Producto eliminado" });
    } catch (error) {
        console.log(error);
    }
};