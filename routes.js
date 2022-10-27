import express from 'express'
const router = express.Router()

router.get('/')
router.get('/:id')
router.post('/')
router.put('/:id')
router.delete('/:id')
router.post('/login')
router.get('/usuarios/part')
router.post('/usuarios/Crear')
router.put('/usuarios/Editar/:id')

export default router