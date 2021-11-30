## Technoweb project

### Authors

- [Alexandre Khial](https://github.com/Akhunter01)
- [Caroline Ah-Hot](https://github.com/ahhotcaro)

## Requirements 

- Mongodb installed on your computer, or a mongodb cloud, then modify the URI in ```lib/backend/.env```
- 

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