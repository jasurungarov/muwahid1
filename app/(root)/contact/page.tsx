'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dot, Home, Mail, Phone, Send } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    setIsLoading(true);
    const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API!;
    const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!;

    const message = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;

    const promise = fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
      }),
    })
      .then(() => form.reset())
      .finally(() => setIsLoading(false));

    toast.promise(promise, {
      loading: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    });
  };

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
        <h2 className='text-center text-4xl section-title font-creteRound mt-2'>
					<span>Contact</span>
				</h2>

				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Contact</p>
				</div>
			</div>

            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-creteRound'>Contact Muwahhid</h1>
                    <p className='mt-2 text-muted-foreground'>
                        I am heere to help and answer any question you might have. I look forward to hearing from you.
                    </p>

                    <div className='mt-12 flex items-center gap-3'>
                        <Mail className='w-4 h-4'/>
                        <p className='text-sm'>info@wahhid.ac</p>
                    </div>
                    <div className='flex items-center gap-3 mt-3'>
                        <Phone className='w-4 h-4'/>
                        <p className='text-sm'>+996 707 067 776</p>
                    </div>
                </div>

                <div>
                    <h1  className='text-4xl font-creteRound mb-2'>Contact form</h1>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className='flex flex-col space-y-3'>
                    <Textarea 
                    id="message"
                    rows={5}
                    {...form.register("message")}
                    disabled={isLoading}
                    className='resize-none h-32'
                    placeholder='Ask question or just say Hi'
                    />
                    {form.formState.errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.message.message}
                    </p>
                    )}

                    <Input
                    type="email"
                    id="email"
                    {...form.register("email")}
                    disabled={isLoading}
                    placeholder='Email address'/>
                    {form.formState.errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.email.message}
                    </p>
                    )}

                    <Input 
                    type="text"
                    id="name"
                    {...form.register("name")}
                    disabled={isLoading}
                    placeholder='Your name here'/>
                     {form.formState.errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                    {form.formState.errors.name.message}
                    </p>
                    )}

                    <Button
                    type="submit"
                    disabled={isLoading}
                    size={'lg'}                    
                    className='w-fit'
                    >
                        {isLoading ? (
                        "Sending..."
                        ) : (
                        <>
                        <span>Send</span>
                        <Send className="w-4 h-4 ml-2" />
                        </>
                    )}
                    </Button>
                    </div>
                    </form>
                </div>               
            </div>
        </div>
  )
}

export default ContactPage
