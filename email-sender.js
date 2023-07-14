const nodemailer = require('nodemailer');

// Create a transporter using your email provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'oussama@gmail.com',
        pass: 'xxxxxxxxxxxxx',
    },
});

// Define the email options
const mailOptions = {
    from: 'oussama@gmail.com',
    to: 'gridsoussama@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent using Node.js',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
