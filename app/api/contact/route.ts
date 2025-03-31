import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Configure the route to handle dynamic requests
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Log the incoming request data
    console.log('Received contact form submission:', { name, email, message });

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { success: false, error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: 'Modverse <onboarding@resend.dev>', // Using Resend's default domain for testing
      to: ['huajunting@icloud.com'],
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      replyTo: email,
    });

    // Log successful email send
    console.log('Email sent successfully:', data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Log the detailed error
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send email',
        details: error
      }, 
      { status: 500 }
    );
  }
} 