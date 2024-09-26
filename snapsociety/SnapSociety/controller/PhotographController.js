const express = require('express');
const router = express.Router();
const photographService = require('../services/PhotographService');

// Add a new photograph
router.post('/addPhoto', async (req, res) => {
    try {
        // const newPhoto = await photographService.addPhoto(req.body);
        // res.status(201).json(newPhoto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Append viewer comments to a photograph
router.put('/appendViewerComments/:photoId/:viewerComments', async (req, res) => {
    try {
        const updatedPhoto = await photographService.appendViewerComments(
            req.params.photoId,
            req.params.viewerComments
        );
        res.status(200).json(updatedPhoto);
    } catch (error) {
       res.status(500).json({ error: error.message });
    }
});

// View photographs by photographer
router.get('/viewPhotosByPhotographer/:photographer', async (req, res) => {
    try {
        const photos = await photographService.viewPhotosByPhotographer(req.params.photographer);
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// View photograph by ID
router.get('/viewPhotoById/:photoId', async (req, res) => {	 	  	  		    	   	 	   	 	
    try {
        const photo = await photographService.viewPhotoById(req.params.photoId);
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// View photographs by rating
router.get('/viewPhotosByRating/:startRating/:endRating', async (req, res) => {
    try {
        const photos = await photographService.viewPhotosByRating(
            req.params.startRating,
            req.params.endRating
        );
        res.status(200).json(photos);
    } catch (error) {
         res.status(500).json({ error: error.message });
    }
});

// Remove photograph by ID
router.delete('/removePhoto/:photoId', async (req, res) => {
    try {
        const deletedPhoto = await photographService.removePhoto(req.params.photoId);
        res.status(200).json(deletedPhoto);
    } catch (error) {
         res.status(500).json({ error: error.message });
    }
});

module.exports = router;
	 	  	  		    	   	 	   	 	
