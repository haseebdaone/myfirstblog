var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    path = require("path"),
    app = express();
    Blog = require("./models/blogs");
    seedDb = require("./seeds");

var port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//
// mongoose.connect("mongodb://localhost/my-blog");

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// Generates seeded data
// seedDb();

app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    // Blog.find({}, function(err, blogs){
    //     if(err){
    //         res.send("error!");
    //     } else {
    //         res.render("index", {data: blogs});
    //     }
    // });
    res.send('Hello');

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

app.listen(port, function(req, res){
    console.log("Server has started");
});
