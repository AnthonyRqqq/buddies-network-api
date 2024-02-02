const router = require('express').Router();

// The /api/users route
// GET route for all users
router.get('/', async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/users/:_id route
// GET route for getting a single user by its _id
router.get('/:_id', async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/users route
// POST route for creating a new user
router.post('/', async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/users/:_id route
// PUT route for updating a user by its _id
router.put('/:_id', async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/users/:_id route
// DELETE route for deleting a user by its _id
route.delete('/:_id', async (req, res) => {
    try {

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

module.exports = router;