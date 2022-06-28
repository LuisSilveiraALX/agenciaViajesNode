import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';



const app = express();



//Conectar la base de datos
db.authenticate()
    .then (() => console.log('base de datos conectada') )
    .catch(error => console.log(error));

// definir puerto
const port = process.env.PORT || 4000;

// habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// agregar Router
app.use('/', router);

// definir la carpeta publica
app.use(express.static('public'));


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})