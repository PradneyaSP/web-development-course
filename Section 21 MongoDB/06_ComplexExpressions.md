# Introduction to Complex Expressions

- The $expr operator allows using aggregation expressions within a query.
- Useful when you need to compare fields from the same document in a more complex manner.

### Usage

1. ```db.sales.find({$expr : { $gt : [{$multiply : ['$price' , '$quantity']} , '$targetPrice'] } })```

#### Note
- Revise this later.