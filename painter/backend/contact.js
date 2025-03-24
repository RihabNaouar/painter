const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-request', async (req, res) => {
  const {  email } = req.body;

  try {
    console.log('Requête reçue:', { email,  }); // Vérifiez les données reçues

    // Configurez le transporteur (remplacez les informations par vos propres détails)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Exemple avec Gmail
      auth: {
        user: 'votre-email@gmail.com', // Votre adresse email
        pass: 'votre-mot-de-passe',   // Votre mot de passe (ou App Password si 2FA activée)
      },
    });

    // Définissez les options de l'email
    const mailOptions = {
      from: email, // L'email de l'utilisateur
      to: 'votre-email@gmail.com', // Votre adresse email où vous souhaitez recevoir les messages
      subject: `Nouvelle demande de contact de `,
      text: `Some one want to contact you
      `,
    };

    // Envoyez l'email
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé:', info); // Vérifiez les détails de l'envoi


    res.status(200).json({ success: true, message: 'Votre message a été envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email :', error);
    res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' });
  }
});

module.exports = router;
