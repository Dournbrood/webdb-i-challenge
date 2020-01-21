### Finding data in a database - Only users with postal code 1010:

select * from customers where postalCode = "1010";

### Find the first 10 orders placed, sorted descending by the order date. The order with date 1997-02-12 should be at the top.

select * from orders

order by orderDate desc

limit 10

## General flow

- [ client ] < HTTP > [ API + Knex Database Driver ] < Database Network Protocol > [ Database ]

- Knex translates from JS to SQL and vice versa. Basically a database transcriber.

- Database Drivers on the other hand, know how to use the database network protocols. HTTP://, postgresql://...

### Finding data in THIS database.

#### We have three columns: 
- `id`, which is exactly what it says on the label.
- `name`, which is a string that MUST be unique.
- `budget`, which is a float.

#### Things we need to do: 
##### GET request to /api/accounts:
- Send back all the data in the `accounts` table.
`select * from accounts` or `db.select("*").from("accounts").then(() => {}).catch(() => {})`

##### POST request to /api/accounts: 
- Simply stick the request body into the `accounts` table.
`db("accounts").insert({...request.body})`

##### PUT request to /api/accounts:
- oh boy
`db("accounts").where("id", "=", request.body.id).update({...request.body})`

##### DELETE request to /api/accounts:
- why
`db("accounts").where("id", "=", request.body.id).delete()`