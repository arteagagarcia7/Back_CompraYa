const mongoose = require ("mongoose");

const conectarDB = async () => {
    try{
        const connection = await mongoose.connect(
            "mongodb+srv://arteagagarcia7:H9a7PP22y&@cluster0.t16ypfj.mongodb.net/?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`mongoDB conectado en : ${url}`);
    }catch (error){
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}
module.exports = conectarDB;