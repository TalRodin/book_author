Built With
* [MongoDB](https://www.mongodb.com/)
* [Mongoosejs](https://mongoosejs.com/)
* [Nodejs](https://nodejs.org/en/)
* [Expressjs](https://expressjs.com/)
* [Robo 3T](https://robomongo.org/)
* [Nodemon](https://nodemon.io/)
* [Postman](https://www.postman.com/)

To Download Mongo DB
1. Go to Mongo DB and download MongoDB Comunity Server
2. Download Robo 3T
3. Open downloads and move the file into for example user folder (rename the file for convinience - mongodb)
4. Create in the same folder a file mongodb-data

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

          A. Create Collection
          B. Press three dots to add request
          
We can have GET, POST, PATCH, DELETE requests

I. POST request:

   - Authors
   
      * Enter request url http://localhost:3000/authors/
      * Press Body
      * Check raw
      * JSON format
      * in the body enter the JSON below and Press SEND
```
{
 "name":"YOUR NAME",
 "birthdate": "DOB"
}
```
   - Books
   
      * Enter request url http://localhost:3000/books/
      * Press Body
      * Check raw
      * JSON format
      * in the body enter the JSON below (Author Id can be taken from the author you just created) and Press SEND
```
{
 "title" : "BOOK TITLE",
 "publisher" : "PUBLISHER",
 "publicationYear" : "YEAR",
 "description" : "DESCRIPTION",
 "author":"author ID"    
}
```      

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
      * in the body enter and Press Enter
      
```
      {
        "name": "THE NEW VALUE"
      }
```

   - Books
   
      * Enter request url http://localhost:3000/books/[BOOK ID]
      * Press Body
      * Check raw
      * JSON format
      * in the body enter and Press Enter
      
```
{
 "title": "THE NEW VALUE"
}
```

IV. GET request:

   -ALL Authors:
   
      * Enter request url http://localhost:3000/authors/
      * Press SEND
      
   -ALL Books:
   
      * http://localhost:3000/books
      * Press SEND
      
   -SINGLE Author
   
      * Enter request url http://localhost:3000/authors/[AUTHOR ID]
      * Press SEND
      
   -SINGLE Book
   
      * Enter request url http://localhost:3000/books/[BOOK ID]
      * Press SEND
      
   (Check DB by refreshing Collection)
   
   -Sorting books 
   
      * Enter request url http://localhost:3000/books?sortBy=title
     or 
      * Go to params:
       1. make key: sortBy
       2. value: title
      * Press Send
      
   -Filter books
   
      * Enter request url http://localhost:3000/books
      * In the Body enter
``` 
{
    "filterBy": {
        "author": [
            "AUTHOR ID"
        ]
    }
}
```
