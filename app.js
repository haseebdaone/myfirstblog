var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    path = require("path"),
    app = express();


mongoose.connect("mongodb://localhost/my-blog");

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String
});

var Blog = mongoose.model("blog", blogSchema);

app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            res.send("error!");
        } else {
            res.render("index", {data: blogs});
        }
    });
}); 

app.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.send("error!")
        } else {
            res.redirect("/blogs");
        }
    });
});

app.get("/blogs/new", function(req, res){
    res.render("new");
});

app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.send("error!");
        } else {
            res.render("show", {data: foundBlog});
        }
    })
});

app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.send("error!");
        } else {
            res.render("edit", {data: foundBlog});
        }
    });
});

app.put("/blogs/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.send("error!");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

app.delete("/blogs/:id", function(req,res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.send("error!");
        }
        res.redirect("/blogs");
    })
});

app.listen(3000, function(req, res){
    console.log("Server has started on port: 3000");
});