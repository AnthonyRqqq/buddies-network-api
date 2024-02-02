const router = require('express').Router();
const { User } = require('../../models')

// The /api/users route
// GET route for all users
router.get('/', async (req, res) => {
    try {
        const data = await User.find();

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/users/:_id route
// GET route for getting a single user by its _id
router.get('/:_id', async (req, res) => {
    try {
        const data = await User.findOne({ _id: req.params._id })
        .populate([
            'thoughts', 'friends'
        ]);

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/users route
// POST route for creating a new user
router.post('/', async (req, res) => {
    try {
        const data = await User.create(req.body);

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/users/:_id route
// PUT route for updating a user by its _id
router.put('/:_id', async (req, res) => {
    try {
        const data = await User.findOneAndUpdate(
            {
                _id: req.params._id
            },
            {
                $set: req.body
            },
            {
                runValidators: true,
                new: true
            }
        );

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

// The /api/users/:_id route
// DELETE route for deleting a user by its _id
route.delete('/:_id', async (req, res) => {
    try {
        const data = await User.findOneAndDelete(
            {
                _id: req.params._id
            }
        );

        res.json('Delete successful');
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    };
});

module.exports = router;