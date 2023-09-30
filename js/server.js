const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "html" directory
app.use('/html', express.static(__dirname + '/html'));

// Serve static files from the "js" directory
app.use('/js', express.static(__dirname + '/js'));

// Handle the "Forgot Password" form submission
app.post('/forgot-password', (req, res) => {
    // Generate OTP and send it via email (replace with your logic)
    const generatedOTP = generateOTP();
    // Send the OTP to the user's email (replace with your logic)

    // Send a response message to indicate success
    res.send('OTP sent successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Helper function to generate a random OTP (4 digits)
function generateOTP() {
    // Replace this with your OTP generation logic
    return Math.floor(1000 + Math.random() * 9000).toString();
}