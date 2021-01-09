const express = require('express');
const Author = require('../models/author');
const router = new express.Router();

// CRUD API

// Create new author
router.post('/authors', async (req, res) => {
    const author = new Author(req.body)
    try {
        await author.save()
        res.status(201).send(author)
    } catch (e){
        res.status(400).send(e)
    }
});

// Get authors
router.get('/authors', async (req, res) => {
    try {
        const authors = await Author.find({}).populate({ path: 'books' })
        res.send(authors)
    } catch (e){
        res.status(500).send(e)
    }
});

// Read single author
router.get('/authors/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const author = await Author.findById(_id)
        if (!author){
            return res.status(404).send()
        }
        return res.status(201).send(author)
    } catch (e){
        res.status(500).send(e)
    }
});

// Update single author (single value in the table)
router.patch('/authors/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'birthdate']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })
    if (!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!author){
            return res.status(404).send()
        }
        res.send(author)
    } catch (e){
        res.status(400).send(e)
    }
});

// Delete single author
router.delete('/authors/:id', async(req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id)
        if (!author){
            return res.status(404).send()
        }
        res.send(author)
    } catch (e){
        res.status(500).send()
    }
});

module.exports = router;
