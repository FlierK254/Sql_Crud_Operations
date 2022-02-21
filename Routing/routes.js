const express=require('express')
const router = express.Router()
const userControllers= require('../Controllers/userControllers')

router.get('/',userControllers.getStudents)
router.get('/:id',userControllers.getStudent)
router.post('/',userControllers.addStudent)
router.put('/:id',userControllers.updateStudent)
router.delete('/:id',userControllers.deleteStudent)
module.exports=router;