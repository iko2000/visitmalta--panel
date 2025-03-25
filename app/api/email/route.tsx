import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Extract the body using JSON parsing
    const { name, email, message } = await request.json();

    // Check if required fields are missing
    if (!email || !message || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Halseus AI <onboarding@resend.dev>', // Replace with your domain once verified
      to: 'shengelia1800@gmail.com', // Replace with your email
      subject: `New Message from ${name} (${email})`,
      react: (
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Message:</strong> {message}</p>
        </div>
      ),
    });

    // Handle Resend errors
    if (error) {
      console.error('Failed to send email:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Return success response
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // Handle unexpected errors
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}