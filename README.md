## Technoweb project

### Authors

- [Alexandre Khial](https://github.com/Akhunter01)
- [Caroline Ah-Hot](https://github.com/ahhotcaro)

### Objectives of the project

Frond-end :
- Use React. Every widget has to be a reusable component
- At least one widget has to be a chart.
- Data can come from distanced APIs and from at least one API created by us.
We have two pages : one with the widgets and an other one to configure our API.

Back-end :
- Our API is realised with express
- It is configurable from the administrative page and we can realize the CRUD operations
- We save our data in a DB using MongoDB

## Requirements 

- Mongodb installed on your computer, or a mongodb cloud, then modify the URI in ```lib/backend/.env```

## Usage

Initialize your front-end
```bash
cd lib/frontend/
npm install
```

Run the front-end
```bash
cd lib/frontend/
npm run start
```

Initialize your back-end
```bash
cd lib/backend/
npm install
touch .env
```
Add the ```MONGODB_URI=<your-uri>``` as describe [here](https://docs.mongodb.com/manual/reference/connection-string/).

Run the back-end
```bash
cd lib/backend/
npm run start
```
