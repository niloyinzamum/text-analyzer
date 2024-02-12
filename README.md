# Text Analysis Web App

This repository contains a web application for text analysis. After pulling the repository, follow the steps below to set up and run the application.

## Clone the repo and switch to "master" branch for the most updated code

## Setup

1. Run the following command to install the dependencies:

    ```bash
    npm install
    ```

    ```bash
    node app.js
    ```

2. Ensure that the `.env` file is properly configured with necessary elements to connect it with the port and databases. Note that the `.env` file is not gitignored for this purpose.

3. The #master is the most updated branch.

## Running the Application

3. Run `localhost:5000` on your browser.

4. Press "Fetch Word Count" to get word counts.

5. Press "Fetch Character Count" to get character counts.

6. Press "Fetch Sentence Count" to get paragraph counts.

7. Press "Fetch Longest Words" to get longest words.

8. Press "Fetch History" to get analyzed history.

## End Points
1. http://localhost:5000/words
2. http://localhost:5000/characters
3. http://localhost:5000/sentences
4. http://localhost:5000/paragraphs
5. http://localhost:5000/longest
6. http://localhost:5000/record/history

## Description

This web application provides a user-friendly interface to analyze text input. It fetches various metrics such as word count, character count, sentence count, longest words, and historical data of analyzed texts. The application is built using Node.js, Express.js, and JavaScript for the backend, mongoDb (atlas cloud) for database, morgan.js for request-response logging and HTML, CSS, and JavaScript for the frontend.
