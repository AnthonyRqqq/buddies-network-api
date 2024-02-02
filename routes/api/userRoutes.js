const router = require('express').Router();
const User = require('../../models/User');
const { ObjectId } = require('mongoose').Types;

// The /api/users route
// GET route for all users
router
    .get('/', async (req, res) => {
        try {
            const data = await User.find();

            res.json(data);

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    })

    // POST route for creating a new user
    .post('/', async (req, res) => {
        try {
            const newUser = new User(req.body);
            const data = await newUser.save();

            res.json(data);

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    });

// The /api/users/:_id route
// GET route for getting a single user by its _id
router
    .get('/:_id', async (req, res) => {
        try {
            const data = await User.findOne({ _id: new ObjectId(req.params._id) })
                .populate([
                    'thoughts', 'friends'
                ]);

            if (!data) {
                return res.status(404).json({
                    message: 'No user found'
                });
            };

            res.json(data);

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    })

    // PUT route for updating a user by its _id
    .put('/:_id', async (req, res) => {
        try {
            const data = await User.findOneAndUpdate(
                {
                    _id: new ObjectId(req.params._id)
                },
                {
                    $set: req.body
                },
                {
                    runValidators: true,
                    new: true
                }
            );

            if (!data) {
                return res.status(404).json({
                    message: 'No user found'
                });
            };

            res.json(data);

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    })

    // DELETE route for deleting a user by its _id
    .delete('/:_id', async (req, res) => {
        try {
            const data = await User.findOneAndDelete(
                {
                    _id: new ObjectId(req.params._id)
                }
            );

            if (!data) {
                return res.status(404).json({
                    message: 'No user found'
                });
            };

            res.json('Delete successful');

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    });

router
    // The /api/users/:userId/friends/:friendId route
    // For adding a new friend to a user's friend list
    .post('/:userId/friends/:friendId', async (req, res) => {
        try {
            const data = await User.findOneAndUpdate(
                {
                    _id: new ObjectId(req.params.userId)
                },
                {
                    $addToSet: {
                        friends: new ObjectId(req.params.friendId)
                    }
                },
                {
                    runValidators: true,
                    new: true
                }
            );

            if (!data) {
                return res.status(404).json({
                    message: 'No user found'
                });
            };

            res.json(data);

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    })

    // For removing a friend from a user's friend list
    .delete('/:userId/friends/:friendId', async (req, res) => {
        try {
            const data = await User.findOneAndUpdate(
                {
                    _id: new ObjectId(req.params.userId)
                },
                {
                    $pull: {
                        friends: new ObjectId(req.params.friendId)
                    }
                },
                {
                    runValidators: true,
                    new: true
                }
            );

            if (!data) {
                return res.status(404).json({
                    message: 'No user found'
                });
            };

            res.json(data);

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    });

module.exports = router;