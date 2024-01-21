# Logical operators in MongoDB

1. `$and` : returns true only if all conditions are satisfied
1. `$or` : returns true only if any of the conditions are satisfied
1. `$not` : returns opposite of the current value
1. `$nor` : or + not

## Usage

1. ``` db.products.find({$and : [{price : {$gte : 250}} , {name : "Diamond Ring"}]}) ``` : Will find products that have price >= 250 and have name = Diamond Ring

1. ``` db.products.find({$or : [{price : {$gte : 2500}} , {name : "Diamond Ring"}]})``` : Will find all the products who either have price >= 250 or name = "Diamond Ring" or Both

1. ``` db.products.find({$nor : [{price : {$gte : 2500}} , {name : "Diamond Ring"}]}) ``` : Will find all the products except those who either have price >= 250 or name = "Diamond Ring" or Both

1. ``` db.products.find({$not : [ { price : {$gte : 2500} } ]}) ``` : Will find all the products whose price is not greater than or equal to 250
