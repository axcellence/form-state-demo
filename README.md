### Form State Demo

This repo is using React's `useFormStatus` hook to track the form's submission status, as well as RSC (React Server Components) and Server Actions to handle the server-side. It returns JSX from server-side form submission.

## RSC

```tsx
// src/app/page.tsx

import { FormState } from "./_components/form-state";
import { action } from "./_components/actions";

export default function Page() {
  return <FormState action={action} />;
}
```

## Client component

```tsx
// src/app/_components/form-state.tsx

"use client";
import { useFormState } from "react-dom";

export function FormState({ action }: Props) {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <>
      <form action={formAction}>
        ...
      </form>
      {state}
    </>
  );
}
```

## Server action

```tsx
// src/app/_components/actions.tsx

"use server";

export async function validateEmail(currentState: any, formData: FormData) {
  "use server";
  const email = formData.get("email");

  ...

  if (...) {
    return {
      errors: {
        email: (
          <div>An account with this email already exists.</div>
        ),
      },
    };
  }
}
```
