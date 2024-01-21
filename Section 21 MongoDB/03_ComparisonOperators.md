# Types of Comparison Operators in MongoDB

1. ```$eq``` : Equal to Operator
1. ```$ne``` : Not Equal to Operator
1. ```$gt``` : Greater than Operator
1. ```$gte``` : Greater than or Equal to Operator
1. ```$lt``` : Less than Operator
1. ```$lte``` : Greater than or Equal to Operator
1. ```$in``` : In Operator
1. ```$nin``` : Not in Operator

### Usage
1. ``` 
    use shop 
    db.products.find({'price' : {$gte:699}})
   ```
   This command finds the products that have prices greater than or equal to 699

1. ```
    use shop 
    db.products.find({'price' : {$in:[699,320,120]}})
   ```
   This command finds all the products that have prices equal to 699 , 320 and 120 . Similarly ```$nin``` operator returns the products that dont't have price equal to the specified values.