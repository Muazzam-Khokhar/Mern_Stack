import express from 'express';
import cors from 'cors';
import bodyParse from 'body-parser'

const app = express();
app.use(bodyParse.json())
app.use(cors())

app.get('/',(req,res)=>{
  res.send('app running.....')
})

app.listen(5000,()=>{
  console.log("Example app is listening on port 5000!")
});