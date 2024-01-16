import nodemailer from "nodemailer";
import { readFile } from "fs/promises";

export default async function sendPDFAPI(req, res) {
  const { attachPDF, userEmail } = req.body;
  const user = process.env.NODEMAILER_EMAIL;
  const pdfPath = "./public/cgv/CGV_CodeMeta_Solutions.pdf"; // Remplacez par le chemin réel de votre PDF

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: process.env.NODEMAILER_PW,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    if (attachPDF) {
      // Lire le fichier PDF
      const pdfContent = await readFile(pdfPath);

      const mail = await transporter.sendMail({
        from: user,
        to: userEmail,
        subject: "Votre PDF demandé depuis la page CGV",
        html: `
          <p> Bonjour, </p>
          <p> Vous avez demandé le PDF depuis la page CGV. Ci-joint le fichier PDF demandé. </p>
        `,
        attachments: [
          {
            filename: "CGV_CodeMeta_Solutions.pdf",
            content: pdfContent,
          },
        ],
      });

      console.log("message sent:", mail.messageId);
    }

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "erreur dans l'envoi de l'email avec PDF" });
  }
}