# Noted API

Noted API is a REST API built with **Express**, **Node.js** and **Typescript** that works as a note-taking CRUD application.

## Usage
After cloning the repository, head to the root folder of the project and run the following commands:

    npm install
    npm run dev

If everything works well, you should see a "Server running" message on your command-line. To stop the server, press <kbd>CTRL</kbd>+<kbd>C</kbd>.

To run the test suites, run:

    npm run test

To create a build, run:

    npm run build

## Routes
The application has four routes:
- "`/notes`": display all the notes with a **GET** request
- "`/notes/new`": create a new note with a **POST** request
- "`/notes/edit`": edit a note with a **PUT** request
- "`/notes/delete`": delete a note with a **DELETE** request

As of now, none of these routes where implemented yet.