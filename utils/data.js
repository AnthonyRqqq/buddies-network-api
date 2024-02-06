// Data for seeding user models
const userData = [
    {
        username: 'Bob',
        email: 'bob@bob.com'
    },
    {
        username: 'Bill',
        email: 'bill@bill.com'
    },
    {
        username: 'Jill',
        email: 'jill@jill.com'
    }
];

// Data for seeding thought models
const thoughtData = [
    {
        thoughtText: 'test thought 1',
        username: 'Bob'
    },
    {
        thoughtText: 'test thought 2',
        username: 'Bob'
    },
    {
        thoughtText: 'test thought 3',
        username: 'Jill'
    }
];

module.exports = { userData, thoughtData };