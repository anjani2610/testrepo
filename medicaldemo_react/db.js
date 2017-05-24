var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/medicalhall')

exports.mongoose=mongoose;

var patientSchema = mongoose.Schema({
  name:String,
  age:Number,
  sex:String,
  mobile:String,
  doctorId:String,
  ailment:String,
  pictureId: String,
  drugs:[{id:String}],
  createDate: {
    type: Date,
    default: Date.now
  }
},
{strict:false}
)

exports.Patient = mongoose.model('Patient',patientSchema,'patients');

var familySchema = mongoose.Schema({
  familyName:String,
  mobile:String,
  email:String,
  patients:[{
    id:String,
    relation:String
  }],
  createDate: {
    type: Date,
    default: Date.now
  }
  },
  {strict:false}
  )

exports.Family = mongoose.model('Family',familySchema,'families');

var drugSchema = mongoose.Schema({
  ailment:String,
  drug:String,
  drugQty:Number,
  renewalDate:String,
  patientReminder:String,
  createDate: {
    type: Date,
    default: Date.now
  }
},
{strict:false}
)

exports.Drug = mongoose.model('Drug',drugSchema,'drugs');

var doctorSchema = mongoose.Schema({
  doctor:String,
  specialization:String,
  address:{
    doorNo:Number,
    area:String,
    city:String,
    state:String,
    pincode:Number
  },
  timings:{
    from:String,
    to:String
  },
  mobile:String,
  createDate: {
    type: Date,
    default: Date.now
  }
},
{strict:false}
)

exports.Doctor = mongoose.model('Doctor',doctorSchema,'doctors');
