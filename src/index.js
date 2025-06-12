import express from 'express';
import sequelize from '../config/db.js';

const app= express();
const port = 3000;


const start= async () =>{
    try{
        await sequelize.authenticate();
        console.log('Database connection has been established successfully');

        app.listen(port, ()=>{
            console.log(`The app listening on port ${port}`);
        });
    } catch(error){
        console.log('Failed to start the application: ', error);
        process.exit(1);
    }
};

app.get('/', (req, res)=>{
    res.send('Hello World !');
});


start();
