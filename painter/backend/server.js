const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables
const cors = require('cors'); // Importation de cors ici
const router = express.Router();

const app = express();
app.use(cors({ origin: 'http://localhost:3000', methods: 'GET,POST,PUT,DELETE' }));
app.use(express.json()); // To parse JSON body

// Middleware
app.use(express.json());
app.use(bodyParser.json());
// WhatsApp contact route (optional)
app.get('/contact', (req, res) => {
  const phoneNumber = process.env.WHATSAPP_PHONE_NUMBER;
  const message = encodeURIComponent(process.env.WHATSAPP_MESSAGE);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  
  res.json({ whatsappLink });
});

// POST route for sending email
router.post('/send-request', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    console.log('Requête reçue:', { name, email, message }); // Log the request data

    // Configure the transporter (make sure to use correct credentials and app password)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Using Gmail as the email service
      auth: {
        user: 'rihabbennaouar@gmail.com', // Your email address
        pass: 'qfzevglhmwinemkk',   // Use App Password if 2FA is enabled
      },
    });

    // Define mail options
    const mailOptions = {
      from: email, // The email of the user
      to: 'rihabbennaouar@gmail.com', // Your email where you want to receive the message
      subject: `Nouvelle demande de contact`,
      text: `
        Email : ${email}
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé:', info); // Log the result of the email sending

    // Respond to the client
    res.status(200).json({ success: true, message: 'Votre message a été envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error.message); // Log the error message
    res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' });
  }
});

// Use the routes in the app
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));


