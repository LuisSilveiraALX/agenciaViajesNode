import {  Testimonial  } from '../models/testimoniales.js'

const guardarTestimonials = async (req, res) => {

    // Validar...

    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje : 'El nombre esta vacio'});
    }

    if(correo.trim() === '') {
        errores.push({mensaje : 'El Correo esta vacio'});
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje : 'El Mensaje esta vacio'});
    }

    console.log(errores);

    if(errores.length > 0) {

        // constular testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        // mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }else {
        // almacenarlo en la base de datos

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('testimoniales');
        } catch (error) {
           console.log(error) 
        }

    }
}


export {
    guardarTestimonials
}