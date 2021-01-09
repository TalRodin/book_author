const express = require('express');
const Book = require('../models/book');
const Author = require('../models/author');
const router = new express.Router();

// CRUD API

// Create book
router.post('/books', async(req, res) => {
    const book = new Book(req.body);
    try {
        await book.save();
        const author = await Author.findById({_id: book.author})
        author.books.push(book);
        await author.save();
        res.status(201).send(book)
    } catch (e){
        res.status(400).send(e)
    }
});

// Read books
router.get('/books', async (req, res) => {
    const { sortBy } = req.query
    const { filterBy } = req.body;
    const SORT_LIST = ['title', 'publisher', 'publicationYear']
    let $match = {}
    if (filterBy) {
        if (filterBy.author) {
            console.log(filterBy.author)
            $match = {
                author: {
                    $in: filterBy.author,
                },
            }
        }
     
        if (filterBy.publicationYear) {
            const maxLimit = filterBy.publicationYear.max
                ? filterBy.publicationYear.max
                : new Date()
            $match = {
                ...$match,
                publicationYear: filterBy.publicationYear.min
                    ? {
                        $lte: maxLimit,
                        $gte: filterBy.publicationYear.min,
                    }
                    : {
                        $lte: maxLimit,
                    },
            };
        }
    }
    try {
        const books = await Book.find($match).sort({
            [SORT_LIST.includes(sortBy) ? sortBy : 'title']: '1',
        })
        res.send(books)
    } catch (e){
        res.status(500).send(e)
    }
});

// Read single book
router.get('/books/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const book = await Book.findById(_id)
        if (!book){
            return res.status(404).send()
        }
        return res.status(201).send(book)
    } catch (e){
        res.status(500).send(e)
    }
});

// Update single book (single value in the table)
router.patch('/books/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'publisher', 'publicationYear', 'description']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })
    if (!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!book){
            return res.status(404).send()
        }
        res.send(book)
    } catch (e){
        res.status(400).send(e)
    }
});

// Delete a book
router.delete('/books/:id', async(req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if (!book){
            return res.status(404).send()
        }
        res.send(book)
    } catch (e){
        res.status(500).send(e)
    }
});

module.exports = router;
