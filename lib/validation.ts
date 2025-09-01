import { z } from 'zod'

export const contactSchema = z.object({
	message: z.string().min(3),
	email: z.string().email(),
	name: z.string().min(3),
})