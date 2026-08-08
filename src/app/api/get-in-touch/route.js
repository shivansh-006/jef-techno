
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { name, email, mobile, companyName, message } = await request.json()

        // const transporter = nodemailer.createTransport({
        //     host: "smtp.gmail.com",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: process.env.PASSWORD,
        //     },
        // })

        console.log("--- SMTP CONFIG DEBUG ---");
        console.log("SMTP_HOST:", process.env.SMTP_HOST);
        console.log("SMTP_PORT:", process.env.SMTP_PORT);
        console.log("SMTP_SECURE:", process.env.SMTP_SECURE);
        console.log("EMAIL:", process.env.EMAIL);
        console.log("--- END DEBUG ---");

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SMTP_PORT || "465"),
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        })

        const adminMail = {
            from: process.env.EMAIL,
            to: `${process.env.EMAIL}, jeftechno.india@gmail.com`,
            subject: 'Hello Jef you have a Lead to get in touch !! Hurry',
            html: `
        <p>Hi JEF</p>
        <p>You have a new message from the contact form.</p>
        <p>Below are the details submitted by the customer:</p>
        <p><strong>Name:</strong> ${name || 'Not Provided'}<br>
        <strong>Email:</strong> ${email || 'Not Provided'}<br>
        <strong>Phone Number:</strong> ${mobile || 'Not Provided'}<br>
        <strong>Company Name:</strong> ${companyName || 'Not Provided'}<br>
        <strong>Message / Requirement:</strong> ${message || 'Not Provided'}</p>
        <p>Please review the inquiry and connect with the customer at the earliest.</p>
        <p>Best Regards,<br>
        Website Notification System<br></p>
      `,
        }

        //     const adminMail = {
        //         from: process.env.EMAIL,
        //         to: process.env.EMAIL,
        //         subject: 'Hello Jef you have a Lead to get in touch !! Hurry',
        //         html: `
        //     <p>Hi JEF</p>
        //     <p>You have a new message from the contact form. Here are the details:</p>
        //     <p><strong>Name:</strong> ${name}<br>
        //     <strong>Email:</strong> ${email}<br>
        //     <strong>Phone Number:</strong> ${mobile}</p>
        //     <p>Call up the client, Its urgent need you attention.</p>
        //     <p>Regards,<br>
        //     JEF GROUP<br>
        //     Sales & Marketing</p>
        //   `,
        //     }


        const autoReply = {
            from: process.env.EMAIL,
            to: email,
            subject: 'JEF UAE IS READY TO GET IN TOUCH SHORTLY !',
            html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us.</p>
        <p>We have received your inquiry and our team will review the details and get in touch with you shortly.</p>
        <p>If your request is urgent, please feel free to contact us directly using the details below:</p>
        📞 Phone: +91 080 37569000\n
        📧 Email: marketing@jeftechno.com\n
        <br><p>We appreciate your interest in JEF Techno and look forward to assisting you.</p>
        <p>Warm Regards,<br>
        Team JEF Techno<br>
      `,
        }

        //     const autoReply = {
        //         from: process.env.EMAIL,
        //         to: email,
        //         subject: 'JEF UAE IS READY TO GET IN TOUCH SHORTLY !',
        //         html: `
        //     <p>Hi ${name},</p>
        //     <p>We’ll do our best to respond within 1-2 business days. In the meantime, feel free to browse our website for more information.</p>
        //     <p>Regards,<br>
        //     JEF GROUP<br>
        //     Sales & Marketing</p>
        //   `,
        //     }

        await Promise.all([
            transporter.sendMail(adminMail),
            transporter.sendMail(autoReply)
        ])

        return NextResponse.json({ message: 'Form submission successful!' })
    } catch (error) {
        console.error('Email error:', error)
        return NextResponse.json({ error: 'Email sending failed' }, { status: 500 })
    }
}
