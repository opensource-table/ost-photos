### Restful API Routes

| Endpoint      | Type   | Operation                                         |
|---------------|--------|---------------------------------------------------|
| `/photos/:id`| GET    | Get all photos for a specific restaurant         |
| `/photos/:id`| POST   | Add a new photo for a specific restaurant     |
| `/photos/:id`| PUT    | Update an existing photo for a specific restaurant |
| `/photos/:id`| DELETE | Delete a photo for a specific restaurant         |

**PHOTOS MODULE**
----
  Returns all photos of a specific restaurant

### API  
 ##### GET 
 Endpoint: ```/photos/:id```
 
 - http request has been successful, it will receive a response code of 200 and all the data of photos(as same as the object below).
 - If an error occurs, it will respond with a 404(not found) or 400(bad request)
 - This request will get all the photos for a specific restaurant
```
 {
  id: "3dc952a0-88ab-11e9-ade2-65e9db81cbe7",
  id_r : 10,
  pic_id: 1, 
  restaurant 'Rempel Group', 
  url: 'https://resizer.otstatic.com/v2/photos/large/24947294.jpg', 
  timestamp: '1977-02-12',
  dislike: 0
 }
```


##### POST 
 Endpoint: ```/photos/:id```
 - Create a new source which updates the database and save the new data into the database. 
 - If a POST request is successful, it will return a http request code of 201. 
 - If an error occurs, it will respond with a 501(Requested HTTP operation not supported.)
 - This request will store the updated picture that the user have put into the database.
 
```
{
    id: "3dc952a0-88ab-11e9-ade2-65e9db81cbe7",
    id_r : 10,
    pic_id: 1, 
    resturant: Taco Bowls,
    url: 'https://resizer.otstatic.com/v2/photos/large/24947294.jpg',
    timestamp: '2019-08-08',
    dislike: 0
}

```

##### PUT
 Endpoint: ```/photos/:id```
 - is updating a known source in the database. On a successful updating, a http response code of 200. 
 - If an error occurs, it will respond with a 501(Requested HTTP operation not supported.)
 - we are updating an existing photo to a specific restaurant photo.
 
```
{
    id: "3dc952a0-88ab-11e9-ade2-65e9db81cbe7",
    id_r : 10,
    pic_id: 1, 
    restaurant: Taco Bowls,
    url: 'https://resizer.otstatic.com/v2/photos/large/29999.jpg',
    timestamp: '2018-03-01',
    dislike: 1
}
```
 


##### Delete
 Endpoint: ```/photos/:id```

 ```
 {
  "id": "3dc952a0-88ab-11e9-ade2-65e9db81cbe7",
  "id_r": 1,
  "pic_id": 1,
  "restaurant": "nihil",
  "timestamp": "1977-11-05",
  "url": "http://lorempixel.com/640/480/food",
  "dislike": 1
}
```
- is to used to delete a specific item in the database. On a successful updating, a http response code of 200 (No error, operation successful). 
- If an error occurs, it will respond with a 501(Requested HTTP operation not supported.)