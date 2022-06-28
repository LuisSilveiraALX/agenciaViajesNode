import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales,paginaDetalleViaje } from '../controllers/paginasController.js'
import { guardarTestimonials } from '../controllers/testimonialController.js'

const router = express.Router();

router.get('/', paginaInicio);
    
router.get('/nosotros', paginaNosotros);
    
router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonials);

export default router;