const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');  // Add this line
const mongoose = require('./db/mongoose');
const photographsRouter = require('./controller/PhotographController');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));  // Use body-parser for URL-encoded data
app.use(cookieParser());
const PORT = process.env.USERPORT | 3001;

app.use(express.json());
// Use the photographsRouter middleware
app.use('/photograph', photographsRouter);

app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Log error to console (optional)
  console.error(err);

  // Respond with error message in JSON format
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

if (require.main === module) {	 	  	  		    	   	 	   	 	
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

module.exports = app;
