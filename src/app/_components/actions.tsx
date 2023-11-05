"use server";
import Link from "next/link";
import { z } from "zod";

async function accountExists(email: string) {
  return true;
}

const emailValidationSchema = z.object({
  email: z.string().email(),
});

export async function validateEmail(currentState: any, formData: FormData) {
  "use server";
  const email = formData.get("email");

  const parsed = emailValidationSchema.safeParse({ email });

  if (!parsed.success) {
    return {
      errors: {
        email: <div className="text-sm italic">Invalid email</div>,
      },
    };
  }

  if (await accountExists(parsed.data.email)) {
    return {
      errors: {
        email: (
          <div className="text-sm italic">
            An account with this email already exists.{" "}
            <Link href="/login" className="underline">
              Login instead
            </Link>
          </div>
        ),
      },
    };
  }
}
