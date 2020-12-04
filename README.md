# Redis Key-Value storage
```
    redis-cli
```
### Exit redis
```
    quit
```
### Set value by key foo with value 42
```
    set foo 42
```
### Get value by key foo
```
    GET foo
```
### If exists key foo
```
    EXISTS foo
```
### Expiration 10 seconds
```
    SET bar hello EX 10 
```
### Expiration in milliseconds
```
    SET bar hello PX 100
```
### Replace foo for world 
```
    GETSET foo world
```
### Add world to key foo
```
    APPEND foo ' world'
```
### Show all keys (very slow operation)
```
    KEYS *
```
### Increment counter on 1
```
    INCR counter
```
### Decrement counter on 1
```
    DECR counter
```
### Save name to HASH TABLE
```
    HSET person1 name "Vova"
```
### Save key age to HASH TABLE
```
    HSET person1 age 19
```
### Get value of key name 
```
    HGET person1 name
```
### Get value of key age
```
    HGET person1 age
```
### Get all keys and values
```
    HGETALL person1
```
### Get all values of person1
``` 
    HVALS person1
```
### Get all keys of person1
```
    HKEYS person1
```
### Add to not structured list
```
    SADD persons "Vasya"
```
### Add to not structured list
```
    SADD persons "Vova"
```
### Get all list of not structured values
```
    SMEMBERS persons
```
### How many values in the list
```
    SCARD persons
```
### Add another list
```
    SADD another
```
### Union two or more lists but with not repeated values
```
    SUNION persons another
```
### Show differences between lists
```
    SDIRR persons another
```
### Delete any element
```
    SPOP persons
```
### Add one from left side
```
    LPUSH mylist "one"
```
### Get with left side from "0" element "1" element
```
    LRANGE mylist 0 1
```
### Get with left side from "0" element "-1" to the end of list
```
    LRANGE mylist 0 -1
```
### Push to list value with right side
```
    RPUSH mylist "two"
```
### Cut from left side one value
```
    LPOP mylist
```
### Cut value from right one value
```
    RPOP mylist
```
### Count of list
```
    LLEN mylist
```
### Ordered List (add 'Vova')
```
   ZADD persons 1980 "Vova" 
```
### Add to ordered list "Ivan"
```
    ZADD persons 1990 "Ivan"
```
### Add to ordered list "Elena"
```
    ZADD persons 1985 "Elena"
```
### Show all items in ordered list
```
    ZRANGE persons 0 -1 WITHSCORES
```
### Start Transaction
```
    MULTI
```
### Command INCR
```
    INCR foo
```
### Command DECR
```
    DECR foo
```
### End Transaction
```
    EXEC
```
### End process of transaction
```
    DISCARD
```
### Redis like subscriber of messages
```
    SUBSCRIBE news
```
### Redis like publisher of messages
```
    PUBLISH news "Hello world"
```