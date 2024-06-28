const express = require('express')
const app =express()
const Port = 5000; //process.env.Port || 5000


app.get('/',(req,res)=>{
    res.send('Hello World')
    console.log('hello world')
})
const start = async () =>{
    try{
        app.listen(Port,() => {
            console.log(`Server is listening on port ${Port}`)
        })

} catch  (error){
    console.log(error)
}
};
start();

