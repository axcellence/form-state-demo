import { FormState } from "./_components/form-state";
import { validateEmail } from "./_components/actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-[280px] w-full space-y-4">
        <FormState action={validateEmail} />
      </div>
    </main>
  );
}
