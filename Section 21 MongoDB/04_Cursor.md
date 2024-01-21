#  Introduction to Cursor in MongoDB

- Cursors in MongoDB are used to efficiently retrieve large result sets from queries, providing control over the data retrieval process.
- MongoDB retrieves query results in batches using cursors
- Cursors are a pointer to the result set on the server.
- Cursors are used to iterate through query results.
- Automatic batching
    - MongoDB retrives query results in batches once
    - Default batch size is usually 101 documents 
    - This improves memory efficiency and network usage

### Cursor Methods
1. count() : Returns the number of documents in the query
2. limit() : Returns only the specified number of documents
3. skip() : Skips certain documents 
4. sort() : sorts the documents in a order

### Usage
```
    use shop
    db.products.find({price : {$gt : 250}}).count();
    db.products.find({price : {$gt : 250}}).limit(5);
    db.products.find({price : {$gt : 250}}).limit(5).skip(2);
    db.products.find({price : {$gt : 1250}}).limit(5).sort({price : 1});
```

#### Note 
1. In sort() : 1-> ascending order , -1 -> descending order
1. skip() can be inefficient for large offsets.
1. Using sort() on large result sets may impact performance.
1. Be cautious when using limit() and skip() on large collections.
1. Consider using indexing to optimize query performance.