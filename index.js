const express=require('express');
const app=express();
const mongoose=require('mongoose');
const ShortUrl=require('./models/shortUrl');
mongoose.connect('mongodb://localhost:27017/urlShortener',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connection Successful...")})
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.get("/",async(req,res)=>{
    const shortUrls=await ShortUrl.find();
    res.render('index',{
        shortUrls:shortUrls
    });
})
app.post("/shortUrl",async(req,res)=>{
await ShortUrl.create({
    full:req.body.fullUrl
})
res.redirect('/');
})
app.get("/:shortUrl",async(req,res)=>{
 const shortUrl= await ShortUrl.findOne({short: req.params.shortUrl});
 if(!shortUrl){ return res.sendStatus(404);}
 shortUrl.clicks++;
 shortUrl.save();
 res.redirect(shortUrl.full);
})
app.listen(3000,(req,res)=>{
    console.log("Server running on port 3000...");
})