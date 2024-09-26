const Photograph = require('../model/Photograph');

const addPhoto = async (photoData) => {

  const photograph = new Photograph(photoData);
      console.log("saveeeeeee", photograph)
  return await photograph.save();
};

const appendViewerComments = async (photoId, viewerComments) => {
  const photograph = await Photograph.findOne({ photoId });
  if (!photograph) {
    throw new Error('Photograph not found');
  }
  photograph.viewerComments += ` ${viewerComments}`;
  return await photograph.save();
};

const viewPhotosByPhotographer = async (photographer) => {
  return await Photograph.find({ photographer });
};

const viewPhotoById = async (photoId) => {
  const photograph = await Photograph.findOne({ photoId });
  if (!photograph) {
    throw new Error('Photograph not found');
  }
  return photograph;
};

const viewPhotosByRating = async (startRating, endRating) => {
  const photograph= await Photograph.find({
    rating: { $gte: startRating, $lte: endRating }
  });
  console.log("rangeee",photograph)
   if (photograph.length==0) {
    throw new Error('Invalid range');
  }	 	  	  		    	   	 	   	 	
  return photograph;
};

const removePhoto = async (photoId) => {
  const photograph = await Photograph.findOneAndDelete({ photoId });
  if (!photograph) {
    throw new Error('Photograph not found');
  }
  return photograph;
};

module.exports = {
  addPhoto,
  appendViewerComments,
  viewPhotosByPhotographer,
  viewPhotoById,
  viewPhotosByRating,
  removePhoto
};
