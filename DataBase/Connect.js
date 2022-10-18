const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Plateforme',{
    useNewUrlParser: true,
    useUnifiedTopology: true   
}).then(()=> {
    console.log('DataBase Connected')
}).catch(error=> {
    console.log('error connecting to database')
});