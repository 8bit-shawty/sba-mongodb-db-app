import db from './conn.js';
// import { ObjectId } from 'mongodb'; 

async function seedData() {
    try {
        // Books collection
        const books = [
            { title: 'Amazon', author: 'Jeff Bezos', copiesAvail: 5 },
            { title: 'Tesla', author: 'Elon Musk', copiesAvail: 8 },
            { title: '2024', author: 'Kamala Harris', copiesAvail: 3 },
            { title: 'My Cool book', author: 'John Doe', copiesAvail: 2 },
            { title: 'Bikini Bottom', author: 'S. Squarepants', copiesAvail: 8 },
        ];
        const booksCollection = db.collection('books');
        await booksCollection.insertMany(books);
        console.log('Books inserted!');

        // Users collection
        const users = [
            { name: "Ricky Bobby", email: "imFast123@fake.com" },
            { name: 'Sandy Cheeks', email: 'texas12@fake.com' },
            { name: 'Harry Potter', email: 'hpotter@magic.com' },
            { name: 'Hello Kitty', email: 'hello24@kitty.com' },
            { name: 'Kobe Bryant', email: 'imhim8@gmail.com' },
        ];
        const usersCollection = db.collection('users');
        await usersCollection.insertMany(users);
        console.log('Users inserted!');

        console.log('Seeding done');
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        process.exit(); // Exit the process after insertion
    }
}

seedData();