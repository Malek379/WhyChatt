// Mongoose
import mongoose from "mongoose";

// MongoURI
const uri = "mongodb+srv://whyalphadash:w0snFuNXwaKDquuA@chatdb.ppkbjco.mongodb.net/?retryWrites=true&w=majority";

// Bağlanma
mongoose.connect(uri);

// Kayıt()
function kayit() {
  
  // Değişkenler
  if (typeof document === 'undefined') {
    const uname = document.getElementById("username").value;
    const upass = document.getElementById("password").value;
    const umail = document.getElementById("email").value;
    
    const userSchema = new mongoose.Schema({
      UserName: {
        type: String,
        required: true,
      },
      UserPassword: {
        type: String,
        required: true,
      },
      UserEmail: {
        type: String,
        required: true,
      },
    });
    
    const newSchema = new userSchema({
      UserName: uname,
      UserPassword: upass,
      UserEmail: umail,
    });
    
    const userData = mongoose.model("KullanıcıVerisi", newSchema);
    
    userData.save();
    
  }
}

// Giriş
function giris() {
  
  // Henüz Hazır Değil
  
}
