import { z } from "zod";

export const EmailSchema = z.string().email("Please enter a valid email address");