const router = require('express').Router();

// The /api/thoughts route
// GET route for all thoughts
router.get('/', async (req,res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/thoughts/:_id route
// GET route for a single thought by its _id
router.get('/:_id', async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/thoughts route
// POST route for creating a new thought
router.post('/', async (req, res) => {
    try {
         
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/thoughts/:_id route
// PUT route for updating a thought by its _id
router.put('/:_id', async (req,res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/thoughts/:_id route
// DELETE route for deleting a thought by its _id
router.delete('/:_id', async (req,res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});