const router = require('express').Router();
const { Thought } = require('../../models/Thought');

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
            const data = await Thought.create(req.body);

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
                _id: req.params._id
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
                _id: req.params._id
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

router.post('/:thoughtId/reactions', async (req, res) => {
    try {
        const data = await Thought.findOneAndUpdata(
            {
                _id: req.params.thoughtId
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

router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const data = await Thought.findOneAndUpdate(
            {
                _id: req.params.thoughtId
            },
            {
                $pull: {
                    reactions: {
                        reactionId: req.params.reactionId
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