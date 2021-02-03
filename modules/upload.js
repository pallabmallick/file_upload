const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/suvhankar', {useNewUrlParser: true, useUnifiedTopology: true});
const {Schema}= mongoose;

const UploadSchema = new Schema({
    imagename:String,
});

const imagemoduel = mongoose.model('uploadfiles',UploadSchema);
module.exports=imagemoduel;