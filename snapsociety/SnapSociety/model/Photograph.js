
const mongoose = require('../db/mongoose');

const photographSchema = new mongoose.Schema({
 
 // define attributes here
 
  photoId: {
        type: String,
        required: true,
        unique: true
    },
    photographer: {
        type: String,
        required: true
    },
    photoType: {
        type: String,
        required: true
    },
    capturedLocation: {
        type: String,
        required: true
    },
    viewerComments: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: true
    }
});

const Photograph = mongoose.model('Photograph', photographSchema);

module.exports = Photograph;
	 	  	  		    	   	 	   	 	
