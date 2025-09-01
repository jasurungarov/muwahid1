'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User2, CheckCircle } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// ✅ faqat email validatsiya
const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
})

function Footer() {
  const [active, setActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [joined, setJoined] = useState(false)

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof emailSchema>) => {
    setIsLoading(true)
    setJoined(false)

    const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API!
    const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!

    const message = `📧 New subscriber joined: ${values.email}`

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: message,
          }),
        }
      )

      if (res.ok) {
        form.reset()
        setJoined(true) // ✅ endi tugmada "Joined" chiqadi
      } else {
        alert("Failed to subscribe. Please try again.")
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer className="flex-center py-24 flex-col container max-w-2xl space-y-12">
      <h1 className="text-5xl max-md:text-3xl font-creteRound text-center">
        Get latest posts delivered right to your inbox
      </h1>

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="grid max-md:grid-cols-1 grid-cols-2 md:gap-4 w-full mb-2">
          <Input
            type="email"
            id="email"
            {...form.register("email")}
            disabled={isLoading || joined}
            className="w-full col-span-2 max-md:mt-2"
            placeholder="Your Email address"
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {form.formState.errors.email.message}
            </p>
          )}

          <Button
            type="submit"
            disabled={isLoading || joined}
            size={'lg'}
            variant={active ? 'default' : 'outline'}
            className="w-full col-span-2 max-md:mt-2 flex items-center justify-center"
          >
            {isLoading ? (
              "Joining..."
            ) : joined ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                <span>Joined</span>
              </>
            ) : (
              <>
                <User2 className="w-4 h-4 mr-2" />
                <span>Join now Email</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </footer>
  )
}

export default Footer
