# Course Content Search Engine Web

### 0x00 Repository Description

Set up an website to provide an interface to interact with the search engine and visualize the search results. The database and search engine core algorithm are experimented and designed in [another repository](https://github.com/Philip-ZENG/course-content-search-engine).

### 0x01 File Structure

- `\component`: react components that can be use repeatedly in different pages
- `\pages`: define each page of the website
  - `\index.js`: Landing search home page
  - `\searchResults.js `: Display a list of search results
  - `\sectionContent.js`: Display the course slides image of each section
- `\public`: Store image of course ppt slides
- `\server`: Server file that handles the search query and interact with the front end
- `\demo`: A short video demo of how the website application works

### 0x02 How to Run the Code

- Software Dependencies

  - NodeJS: JavaScript run time environment

  - MongoDB: Non-SQL database

- First Time Setup

  - Clone the repository from GitHub

  - Install dependencies

    ```shell
    npm install
    ```

- Run the front-end

  - Compile and run the front-end, run the following command under project root directory

    ```shell
    npm run dev
    ```

  - Open the link given in the terminal in browser, which by default should be http://localhost:3000

  - After modification of front-end code and save it, NodeJS will automatically recompile the app

- Run the back-end server

  - Make sure all data has been inserted into database properly (for database building, see [this repo](https://github.com/Philip-ZENG/course-content-search-engine)

  - To start back-end server, go to the `./server` directory and run the following command

    ```shell
    node searchServer.js
    ```

    

  
