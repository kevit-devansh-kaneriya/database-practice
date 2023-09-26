var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("dbtest");
    var collection = dbo.collection("relist");

    // 1) Write a MongoDB query to display all the documents in the collection restaurants.
    // collection.find({}).toArray().then((result) => {
    //     console.log(result);
    // });

    // 2) Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine for all the documents in the collection restaurant
    // collection.find({}, { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 } }).toArray().then((result) => {
    //     console.log(result);
    // });

    // 3) Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine, but exclude the field _id for all the documents in the collection restaurant.
    // collection.find({}, { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 } }).toArray().then((result) => {
    //     console.log(result);
    // });


    // 4) Write a MongoDB query to display the fields restaurant_id, name, borough, and zip code, but exclude the field _id for all the documents in the collection restaurant.
    // collection.find({}, { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1, "_id": 0 } }).toArray().then((result) => {
    //     console.log(result);
    // });

    // 5) Write a MongoDB query to display all the restaurants which are in the borough Bronx.
    // collection.find({}, { projection: { "borough": "Bronx" } }).toArray().then((result) => {
    //     console.log(result);
    // });


    // 6) Write a MongoDB query to display the first 5 restaurants which are in the borough Bronx.
    // collection.find({}, { projection: { "borough": "Bronx" } }).limit(5).toArray().then((result) => {
    //     console.log(result);
    // });


    // 7) Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
    // collection.find({}, { projection: { "borough": "Bronx" } }).skip(5).limit(5).toArray().then((result) => {
    //     console.log(result);
    // });


    // 8) Write a MongoDB query to find the restaurants that achieved a score of more than 90.
    // collection.find({ "grades.score": {$gt : 80} },{projection:{"name": 1,"grades.score":1}}).toArray().then((result) => {
    //     console.log(result);
    // });

    // 9) Write a MongoDB query to find the restaurants that achieved a score, of more than 80 but less than 100.
    // collection.find({ "grades.score": {$gt : 80 , $lt :100} },{projection:{"name": 1,"grades.score":1}}).toArray().then((result) => {
    //     console.log(result);
    // });


    // 10) Write a MongoDB query to find the restaurants which locate in a latitude value less than - 95.754168.
    // collection.find({ "address.coord": {$lt : -95.754168} },{projection:{"name": 1,"grades.coord":1}}).toArray().then((result) => {
    //     console.log(result);
    // });

    // 11) Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and whose grade score is more than 70 and latitude less than - 65.754168.
    // collection.find({ $and: [ { "cuisine":  { $ne: "American " } },{ "grades.score": {$gt : 70} },{ "address.coord": {$lt : -65.754168} }]} , 
    // {projection:{"name": 1,"cuisine":1}}).toArray().then((result) => {
    //     console.log(result);
    // });



    // 12) Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score of more than 70 and located in the longitude less than - 65.754168.Note: Do this query without using $and operator.
    // collection.find({ "cuisine":  { $ne: "American " } ,"grades.score": {$gt : 70} , "address.coord": {$lt : -65.754168} } , 
    // {projection:{"name": 1,"cuisine":1}}).toArray().then((result) => {
    //     console.log(result);
    // });


    // 13) Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belonging to the borough Brooklyn.The document must be displayed according to the cuisine in descending order.
    // collection.find({ "cuisine":  { $ne: "American " } ,"grades.grade": "A", "borough":  { $ne: "Brooklyn" } } , 
    // {projection:{"name": 1,"cuisine":1}}).sort({"cuisine": -1}).toArray().then((result) => {
    //     console.log(result);
    // });


    // 14) Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Wil' as the first three letters of their name.
    // collection.find({ "name": /^Wil/ },
    // { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 } }).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 15) Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as the last three letters of their name.
    // collection.find({ "name": /ces$/ },
    // { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 } }).toArray().then((result) => {
    //     console.log(result);
    // });
    

    // 16) Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Reg' as three letters somewhere in their name.
    // collection.find({ "name": /.*Reg.*/ },
    // { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 } }).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    
    // 17) Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dishes.
    // collection.find({ $or: [ { "cuisine": "American" }, { "cuisine": "Chinese" } ] , "borough":"Bronx"},
    // { projection: { "borough": 1, "cuisine": 1 , "_id":0} }).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 18) Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronx or Brooklyn.
    // collection.find({ "borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]} },
    // { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 } }).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 19) Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which do not belong to the borough Staten Island or Queens, or Bronx or Brooklyn.
    // collection.find({ "borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]} },
    // { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 } }).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 20) Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which achieved a score that is not more than 10.
    // collection.find({ "grades.score": {$lt : 10} },
    // { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 } }).toArray().then((result) => {
        //     console.log(result);
        // });
        
        
    // 21) Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which prepared dishes except 'American' and 'Chinees' or the restaurant's name begins with the letter 'Wil'.  
    // collection.find({ $or: [ { "name": /^Wil/ } ] ,"cuisine" :{$nin :["American ","Chinees"]} },
    // { projection: { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 } }).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 22) Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many survey dates.
    // collection.find({ "grades.date": {$eq: new Date("2014-08-11T00:00:00Z")}, "grades.grade":"A" , "grades.score" : 11 },
    // { projection: { "restaurant_id": 1, "name": 1, "grades": 1 } }).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 23) Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants where the 2nd element of the grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
    // collection.find({ "grades.date": {$eq: new Date("2014-08-11T00:00:00Z")}, "grades.grade":"A" , "grades.score" : 9 },
    // { projection: { "restaurant_id": 1, "name": 1, "grades": 1 } }).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 24) Write a MongoDB query to find the restaurant Id, name, address, and geographical location for those restaurants where the 2nd element of the coord array contains a value that is more than 42 and up to 52.
    // collection.find({ "address.coord.1": {$gt : 42, $lte : 52} },
    // { projection: { "restaurant_id": 1, "name": 1, "address": 1 } }).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 25) Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
    // collection.find({}).sort({"name":1}).limit(5).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 26) Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns
    // collection.find({}).sort({"name":-1}).limit(5).toArray().then((result) => {
    //     console.log(result);
    // });

    
    // 27) Write a MongoDB query to arrange the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.
    // collection.find({}).sort({"cuisine":1,"borough":-1}).limit(5).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 28) Write a MongoDB query to know whether all the addresses contains the street or not.
    // collection.find({"address.street" : { $exists : true }}).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 29) Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.
    // collection.find({"address.coord" : { $type : 1 }}).toArray().then((result) => {
    //     console.log(result);
    // });
    
    
    // 30) Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.
    // collection.find({ "grades.score" : {$mod : [7,0]} }).toArray().then((result) => {
    //     console.log(result);
    // });


    // 31) Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants which contains 'mon' as three letters somewhere in its name.
    // collection.find({ "name": /.*mon.*/ },
    // { projection: { "name": 1, "borough": 1 ,"address": 1, "cuisine":1 } }).toArray().then((result) => {
    //     console.log(result);
    // });
    
    // 32) Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name. 
    collection.find({ "name": /^Mad/ },
    { projection: { "name": 1, "borough": 1 ,"address": 1, "cuisine":1 } }).toArray().then((result) => {
        console.log(result);
    });
    


});