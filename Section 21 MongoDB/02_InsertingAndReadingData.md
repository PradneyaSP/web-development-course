# Commands to insert and read data of database

### Inserting Documents in a Collection in MongoDB

1.  ```db.<collection-name>.insertOne({field1 : value1 , ...})``` : To insert a single document in a collection

2.  ```db.<collection-name>.insertMany([{...},{...},{...}])``` : To insert a multiple documents in a collection

#### Note:  
1. Its not necesary to create a collection before inserting documents into it.  
2. Use quotes in field name only when there's a special character , spaces , reserved words or if it starts with a numeric digit.
3. Ordered Insert: Default Behaviour is ordered where MongoDB stops on the first error.
4. Unordered Insert: When Executing bulk write operations with unordered flag , MongoDB continues processing even after encountering an error

   ```db.<collection-name>.insertMany([{...},{...},{...}] , {ordered: false})```  

5. Collection name and field name is case sensitive
---

### Read Operations in MongoDB

1.  ```db.<collection-name>.find()``` : To display all the documents in a collection

2.  ```db.<collection-name>.find({key:value})``` : To find all documents in a collection having the following key value pair

3.  ```db.<collection-name>.findOne({key:value})``` : To display a single document from a collection having the following key value pair

4.  ```mongoimport <json-file>.json -d <database-name> -c <collection-name>``` : To import data from a json file

5.  ```mongoimport <json-file>.json -d <database-name> -c <collection-name> --jsonArray``` : To import data which is stored in an array from a json file 

6.  ```mongoexport -d <database-name> -c <collection-name> -o <json-file>.json``` : To export data in json format

#### Note: 
1. mongoimport and mongoexport are part of MongoDB Database tools.
2. You need to enter the entire file path in place of  ```<json-file>``` .