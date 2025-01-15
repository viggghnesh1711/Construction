// app/api/send/route.ts
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const { name, email, message } = await request.json();
    
    try {
        const response = await resend.emails.send({
            from: email,
            to: process.env.TO_EMAIL,
            subject: `${name} has a message!`,
            react: EmailTemplate({ name, email, message }), // Use a React component for the email body
        });
        console.log(response)
        return new Response(JSON.stringify({message:"mail sent "}),{
          status:200,
          })
       
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({message:"failed to send email "}),{
          status:200,
          })
    }
}

