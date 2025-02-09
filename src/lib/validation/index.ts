import { z } from "zod";

export const signupValidation = z.object({
    name: z.string().min(2,{message: "Too Short!"}),
    username: z.string().min(2, {message: "Too Short!"}),
    email: z.string().email(),
    password: z.string().min(8,{message: "Password Must Be Atleast 8 Characters"})
  })

  export const signinValidation = z.object({
  
    email: z.string().email(),
    password: z.string().min(8,{message: "Password Must Be Atleast 8 Characters"})
  })