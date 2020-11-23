const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({path: './config/config.env'});

// Connnect to database
connectDB();

// Route files
const watches = require('./routes/watches')
const user = require('./routes/user')
const admin = require('./routes/admin')

const app = express();

// Body parser
app.use(express.json());

// Dev loggin middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Cookie parser
app.use(cookieParser());

// File Upload
app.use(fileUpload());

// Cors
app.use(cors());

// Mount routes
app.use('/api/watches', watches)
app.use('/api/auth', user) 
app.use('/api/admin', admin) 

app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1))
})