import { EmailTemplates } from '../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.PUBLIC_NEXT_FROM_EMAIL;



export async function POST(req , res) {
   
    const { name , email , subject  , message } =  await req.json();
    
  try {
    const data = await resend.emails.send({
      from: fromEmail ,
      to: [process.env.PUBLIC_NEXT_EMAIL_ONE , process.env.PUBLIC_NEXT_EMAIL_TWO ],
      subject: subject ,
      react: EmailTemplates({
        personName : name , 
        personEmail : email ,
        personMessage : message
    }),
      text : "",
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}