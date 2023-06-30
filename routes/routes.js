const express = require('express');
const router = express.Router()
module.exports = router;

const Model = require('../model/model');


router.get('/products', async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/products', async (req, res) => {
    for(let i of req.body){
        const product = new Model({
            ...i
        })
        try {
            const dataToSave = await product.save();
        } catch (error) {
            res.status(400).json({
                message:error.message
            })
            
        }
    }
    res.status(201).json({message:"dados inseridos"})
})


router.get('/products/:id',async  (req, res) => {
    try {
        let data = await Model.findById(req.params.id);
        if (data==null){
            data = []
        }       
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.patch('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Product with ${data.title} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})