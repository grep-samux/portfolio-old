'use server';

import { getErrorMessage, validateString } from '@/shared/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/shared/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log('running on server');

  const sender = formData.get('senderEmail');
  const message = formData.get('message');

  console.log(`senderEmail: ${sender}`);
  console.log(`message: ${message}`);

  if (!validateString(sender, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'samuele.villa@outlook.com',
      subject: 'Message from contact form',
      reply_to: sender as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: sender as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
