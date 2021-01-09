Built With
* [MongoDB](https://www.mongodb.com/)
* [Mongoosejs](https://mongoosejs.com/)
* [Nodejs](https://nodejs.org/en/)
* [Expressjs](https://expressjs.com/)
* [Robo 3T](https://robomongo.org/)
* [Nodemon](https://nodemon.io/)
* [Postman](https://www.postman.com/)

Getting started

1. Clone the project from Github
2. In terminal run 
```git clone <cloned project>```
3. Switch to the directory of the project
```cd book_author```
4. Run 
```npm install```
5. Run 
```npm run seed```
6. Run 
```npm run start```
7. Postman:
 1. Create Collection
 2. Press three dots to add request
 We can have GET, POST, PATCH, DELETE requests
  I. POST request:
    - Authors
      * Enter request url http://localhost:3000/authors/
      * Press Body
      * Check raw
      * JSON format
      * in the body enter
      ```
      {
    "name":"YOUR NAME",
    "birthdate": "DOB"
      }
      ```
      * Press SEND
      (Check DB by refreshing Collection)
    - Books
      * Enter request url http://localhost:3000/books/
      * Press Body
      * Check raw
      * JSON format
      * in the body enter
      ```
      {
    "title" : "BOOK TITLE",
    "publisher" : "PUBLISHER",
    "publicationYear" : "YEAR",
    "description" : "DESCRIPTION",
    "author":"author ID"    
      }
      ```
      Author Id can be taken from the author you just created
      * Press SEND
      (Check DB by refreshing Collection)
  II. DELETE request:
    - Authors
      * Enter request url http://localhost:3000/authors/[AUTHOR ID]
      * Press SEND
      (Check DB by refreshing Collection)
      In the body you will see the Author that was deleted
    - Books
      * Enter request url http://localhost:3000/books/[BOOK ID]
      * Press SEND
      (Check DB by refreshing Collection)
   III. PATCH request:
    - Authors
      * Enter request url http://localhost:3000/authors/[AUTHOR ID]
      * Press Body
      * Check raw
      * JSON format
      * in the body enter
      ```
      {
    "name": "THE NEW VALUE"
      }
      ```
      * Press SEND
      (Check DB by refreshing Collection)
    - Books
      * Enter request url http://localhost:3000/books/[BOOK ID]
      * Press Body
      * Check raw
      * JSON format
      * in the body enter
      ```
      {
    "title": "THE NEW VALUE"
      }
      ```
      * Press SEND
      (Check DB by refreshing Collection)
   
 






