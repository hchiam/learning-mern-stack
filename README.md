# Learning MERN Stack

Just one of the things I'm learning: <https://github.com/hchiam/learning>

Free Code Camp Tutorial: on [YouTube](https://www.youtube.com/watch?v=7CqJlxBYj-M) or [Medium](https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1)

My fork of [Beau Carne](https://github.com/beaucarnes)'s repo: <https://github.com/hchiam/mern-exercise-tracker-mongodb>

## Notes

**M** = MongoDB (We'll use Mongoose to make it easier for Node.js to work with MongoDB, and we'll use MongoDB Atlas = MongoDB database, but cloud).
**E** = Express (makes it easier to work with Node.js. We'll use `cors` middleware to access other servers outside our server).
**R** = React (for the frontend).
**N** = Node.js (for the server. We'll use `dotenv` to load environment variables from an .env file into `process.env`, and `nodemon` to make the app auto-restart when you edit/save files).

Exercise Tracker App:

- Exercises collection
- Users collection
- every Exercise has one User

## MongoDB

### Terms

Database = Database (in Tabular/Relational DBs)
Collection = Table (in Tabular/Relational DBs)
Document = Row (in Tabular/Relational DBs)
Index = Index (in Tabular/Relational DBs)
$lookup = Join (in Tabular/Relational DBs)
Reference = Foreign Key (in Tabular/Relational DBs)

### MongoDB Documents

BSON (looks like JSON). "Documents" can be nested. Data can be placed "right next" to each other.

### MongoDB Atlas

Cluster = place to store data (in the cloud).

Hit the "Connect" button to see the security and connection steps.

`mongodb+srv://dbUser:<password>@cluster0-m5jph.gcp.mongodb.net/test?retryWrites=true&w=majority`

### MongoDB ObjectId

ObjectId is guaranteed unique across collections: timestamp + random value + count.

## Project Folder Setup

```bash
node -v
npx create-react-app mern-exercise-tracker
cd mern-exercise-tracker
mkdir backend # in bigger projects: might have backend folder not inside frontend folder
cd backend
npm init
npm install express cors mongoose dotenv
npm install -g nodemon # you might have to do sudo
touch server.js # inside /backend
nodemon server.js
```

Leave `nodemon` running in that CLI tab. Open another CLI tab to run in parallel so you can create more files.

```bash
touch .env
mkdir models # inside /backend
touch models/exercise.model.js
touch models/user.model.js
mkdir routes # inside /backend
touch routes/exercises.js
touch routes/users.js
```

## Optional setup for [ESLint](https://github.com/hchiam/learning-eslint-google)

```bash
cd mern-exercise-tracker/backend
npm install --save-dev eslint eslint-config-google # I like to use eslint
./node_modules/.bin/eslint --init
# To check syntax and find problems
# CommonJS (require/exports)
# React
# No TypeScript
# Browser, Node
# JavaScript config file
# Yes, install eslint-plugin-react@latest
nodemon -x 'npm run lint; node server.js' # inside /backend
```
