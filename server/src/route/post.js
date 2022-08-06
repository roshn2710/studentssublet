const postModel = require("../models/post.js");
const commentModel = require("../models/comment");

module.exports = function(app,mongoose){
    app.post("/api/post",function(req,res){
        console.log("HERE");
        console.log(req.body);
        postModel.create({
            title:req.body.title,
            description:req.body.description,
            images: req.body.images,
            address: req.body.address,
            terms: req.body.terms,
            price: req.body.price,
            userID: req.body.userID
        },function(err,data){
            if(err){
                console.log(err);
                res.status(422);
            }else{
                commentModel.create({
                    userID: req.body.userID,
                    commentText:[],
                    projectID:data._id
                })
                res.status(200).send({success:true});
            }
        });
    });

    app.get("/", (req, res) => {
        console.log("home")
        try {    
            postModel.
                find({})
                .populate('userID')
                .then((data) => {
                    console.log(data)
                    res.send(data);
                });
            
        } catch(err){
            res.status(500).send(err);
        }
    });

    app.get("/post/:id", (req, res) => {
        let _id = req.params.id;
        try {
            postModel
            .findById(_id)
            .populate("userID")
            .then((data) => res.send(data))
            
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    })
}