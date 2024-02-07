const router = require('express').Router();
const Thought = require('../../models/Thought');
const { ObjectId } = require('mongoose').Types;

// The /api/thoughts route
// GET route for all thoughts
router
    .get('/', async (req, res) => {
        try {
            const data = await Thought.find();

            res.json(data);

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    })

    // POST route for creating a new thought
    .post('/', async (req, res) => {
        try {
            const newThought = new Thought(req.body);
            const data = await newThought.save();

            if (!data) {
                return res.status(404).json({
                    message: 'No thought found'
                });
            };

            res.json(data);

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    });

// The /api/thoughts/:_id route
// GET route for a single thought by its _id
router
    .get('/:_id', async (req, res) => {
        try {
            const data = await Thought.findOne({
                _id: new ObjectId(req.params._id)
            });

            if (!data) {
                return res.status(404).json({
                    message: 'No thought found'
                });
            };

            res.json(data);

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    })

    // PUT route for updating a thought by its _id
    .put('/:_id', async (req, res) => {
        try {
            const data = await Thought.findOneAndUpdate(
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
                    message: 'No thought found'
                });
            };


            res.json(data);

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    })

    // DELETE route for deleting a thought by its _id
    .delete('/:_id', async (req, res) => {
        try {
            const data = await Thought.findOneAndDelete({
                _id: new ObjectId(req.params._id)
            });

            if (!data) {
                return res.status(404).json({
                    message: 'No thought found'
                });
            };


            res.json('Delete successful');

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        };
    });

// The /api/thoughts/:thoughtId/reactions route
// POST route for adding new reactions to thoughts by _id
router.post('/:thoughtId/reactions', async (req, res) => {
    try {
        const data = await Thought.findOneAndUpdate(
            {
                _id: new ObjectId(req.params.thoughtId)
            },
            {
                $addToSet: {
                    reactions: req.body
                }
            },
            {
                runValidators: true,
                new: true,
            }
        );

        if (!data) {
            return res.status(404).json({
                message: 'No thought found'
            });
        };


        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

// The /api/thoughts/:thoughtId/reactions/:reactionsId route
// Used for deleting a reaction by _id on a thought that has been selected by _id
router.delete('/:thoughtId/reactions', async (req, res) => {
    try {
        const data = await Thought.findOneAndUpdate(
            {
                _id: new ObjectId(req.params.thoughtId)
            },
            {
                $pull: {
                    reactions: {
                        reactionId: new ObjectId(req.body)
                    }
                }
            },
            {
                runValidators: true,
                new: true,
            },
        );

        if (!data) {
            return res.status(404).json({
                message: 'No thought found'
            });
        };

        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;