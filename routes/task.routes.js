import {Router} from 'express'

import { 
    getTask,
    createTask,
    updateTask,
    deleteTask,
    getTasks
    
} from '../controllers/task.controlles.js'
const router = Router()

router.get('/tasks', getTasks)


router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.put('/tasks/:id', updateTask)

router.delete('/tasks/:id', deleteTask)


export default router