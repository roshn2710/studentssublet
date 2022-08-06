const mongoose = require('mongoose')
const uri = "mongodb+srv://admin:hackathon123@cluster0.peuzn.mongodb.net/studentssublet?retryWrites=true&w=majority"

mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true} )


