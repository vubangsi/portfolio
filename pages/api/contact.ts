import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vmercel@gmail.com', // Your Gmail address
    pass: 'wrlxyyzqeqahpxsl' // Your App Password
  }
});

export const post: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, company, project_type, message } = data;

    // Validate the data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: 'Name, email, and message are required' }),
        { status: 400 }
      );
    }

    // Email options
    const mailOptions = {
      from: 'vmercel@gmail.com',
      to: email, // Send to the user who filled the form
      bcc: 'vmercel@gmail.com', // BCC to yourself
      subject: 'Thank you for reaching out!',
      text: `Hi ${name},

Thank you for contacting me! I've received your message and will get back to you as soon as possible.

Here's a copy of your message:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Project Type: ${project_type || 'Not specified'}

Message:
${message}

Best regards,
Mercel Vubangsi`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #1e40af;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${project_type || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line; background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #3b82f6;">${message}</p>
          </div>
          
          <p>Best regards,<br>Mercel Vubangsi</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 0.9em; color: #64748b;">
            <p>This is an automated message. Please do not reply directly to this email.</p>
          </div>
        </div>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send message. Please try again later.' }),
      { status: 500 }
    );
  }
};
