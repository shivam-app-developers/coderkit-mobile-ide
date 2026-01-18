import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { sendContactConfirmation, sendContactNotificationToAdmin } from '@/lib/email';

// Skip this route during build
export const dynamic = 'force-dynamic';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData;

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Save to Firestore
    const now = new Date();
    const docRef = await addDoc(collection(db, 'contact_submissions'), {
      name: body.name.trim(),
      email: body.email.trim(),
      subject: body.subject,
      message: body.message.trim(),
      submittedAt: serverTimestamp(),
      status: 'unread',
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
    });

    // Send confirmation email to user
    await sendContactConfirmation(body.email, body.name);

    // Send notification email to admin
    await sendContactNotificationToAdmin({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      timestamp: now.toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully',
        id: docRef.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again later.' },
      { status: 500 }
    );
  }
}
