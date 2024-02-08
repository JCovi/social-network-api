// const mongoose = require("mongoose");
// const { User, Thought, Reaction } = require("./models");

// mongoose.connect("mongodb://127.0.0.1:27017/social-network-api");

// const seedDatabase = async () => {
//   try {
//     await User.deleteMany();
//     await Thought.deleteMany();
//     await Reaction.deleteMany();

//     const arrayLength = 6;

//     const userList = [
//       "John Wick",
//       "Winston",
//       "Charon",
//       "Sofia",
//       "Cassian",
//       "The Bowery King",
//       "Aurelio",
//       "Marcus",
//       "Viggo Tarasov",
//       "Iosef Tarasov",
//       "Ares",
//       "Gianna D'Antonio",
//       "Santino D'Antonio",
//       "Wick",
//       "Viggo",
//       "Abram Tarasov",
//       "Jimmy",
//       "Ms. Perkins",
//       "Harry",
//       "Francis"
//     ];
    
//     let newUsers = [];

//     for (let i = 0; i < arrayLength; i++) {
//         let randomFirstNameIndex = getRandomNumber(0, userList.length);
//         let randomLastNameIndex = getRandomNumber(0, userList.length);
//         let firstName = userList[randomFirstNameIndex];
//         let lastName = userList[randomLastNameIndex];
//         let userName = `${lastName}, ${firstName}`;
       
//         let emailAddress = `${firstName.toLowerCase()}${lastName.toLowerCase()}@example.com`;
    
//         let newUser = {
//             _id: new mongoose.Types.ObjectId(),
//             username: userName,
//             email: emailAddress,
//             thoughts: [],
//             friends: [],
//         };
    
//         newUsers.push(newUser);
//     }    

//     const thoughtList = [
//       "I'm not afraid of John Wick.",
//       "People keep asking if I'm back, and I haven't really had an answer. But now, yeah, I'm thinkin' I'm back.",
//       "You stabbed the Devil in the back. To him, this isn't vengeance; this is justice.",
//       "I once saw him kill three men in a bar... with a pencil, with a f*cking pencil.",
//       "I'd like a tasting.",
//       "Tell him... Tell him... Yeah, I'll tell him.",
//       "I gave you seven bullets. I gave you seven. What did you do?",
//       "I'd like to see the manager.",
//       "You think you can take John Wick?",
//       "This life follows you.",
//       "Be seeing you.",
//       "It's not what you did, son, that angers me so. It's who you did it to.",
//       "Whoever comes, I'll kill them. I'll kill them all.",
//       "You wanted me back... I'm back.",
//       "You can either hand over your son, or you can die screaming alongside him!",
//     ];    
    
//     let newThoughts = [];

//     for (let i = 0; i < arrayLength; i++) {
//       let newThought = {
//         _id: new mongoose.Types.ObjectId(),
//         thoughtText: thoughtList[i],
//         username: newUsers[i].username,
//         reactions: [],
//       }

//       newThoughts.push(newThought);
//     }

//     const reactionList = [
//       "Yeah, I'm thinking I'm back.",
//       "I gave you seven bullets. I gave you seven. What did you do?",
//       "I once saw him kill three men in a bar... with a pencil, with a f*cking pencil.",
//       "People keep asking if I'm back, and I haven't really had an answer. But now, yeah, I'm thinkin' I'm back.",
//       "You stabbed the Devil in the back. To him, this isn't vengeance; this is justice.",
//       "I'd like a tasting.",
//       "Tell him... Tell him... Yeah, I'll tell him.",
//       "I'd like to see the manager.",
//       "You think you can take John Wick?",
//       "This life follows you.",
//     ];
    
//     let newReactions = [];

//     for (let i = 0; i < arrayLength; i++) {
//       let id = new mongoose.Types.ObjectId();
//       let newReaction = {
//         _id: id,
//         reactionId: id,
//         reactionBody: reactionList[i],
//         username: newUsers[i].username,
//       }

//       newReactions.push(newReaction);
//     }

//     function getRandomNumber(min, max) {
//       return Math.floor(Math.random() * (max - min) + min);
//     }

//     for (let i = 0; i < newThoughts.length; i++) {
//       let randomUser = getRandomNumber(0, arrayLength);
//       let randomThought = getRandomNumber(0, arrayLength);
//       let randomReaction = getRandomNumber(0, arrayLength);
//       let randomFriend = getRandomNumber(0, arrayLength);

//       newThoughts[randomThought].reactions.push(
//         newReactions[randomReaction]._id
//       );

//       newUsers[randomUser].thoughts.push(newThoughts[randomThought]._id);

//       newUsers[randomUser].friends.push(newUsers[randomFriend]._id);
//     }

//     await User.deleteMany();
//     await User.insertMany(newUsers)
//       .then((result) => {
//         console.log("New users inserted successfully");
//       })
//       .catch((error) => {
//         console.error("Error inserting new users:", error);
//       });

//     await Thought.deleteMany();
//     await Thought.insertMany(newThoughts)
//       .then((result) => {
//         console.log("New thought inserted successfully");
//       })
//       .catch((error) => {
//         console.error("Error inserting new thought:", error);
//       });

//     await Reaction.deleteMany();
//     await Reaction.insertMany(newReactions)
//       .then((result) => {
//         console.log("New reaction inserted successfully");
//       })
//       .catch((error) => {
//         console.error("Error inserting new reaction:", error);
//       });

//     console.log("Database seeded");
//     console.info("Seeding successful");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   } finally {
//     console.info("Process exit");
//     process.exit(0);
//   }
// };

// seedDatabase();
