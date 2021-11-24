const mongoose = require('mongoose');
const asyncHandler = require("./middleware/asyncHandler");



module.exports = asyncHandler(async () => {
    const connectionParams = {
        useNewUrlParser:true,
        useCreateIndex:true,
    useUnifiedTopology:true,
       useFindAndModify:false
    }

    const connection = mongoose.connect(process.env.DB);
     connection
     ? console.log("connected to database")
     :console.log("could not connect to database!")
});