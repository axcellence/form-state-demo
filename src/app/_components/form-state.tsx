"use client";
import { useFormState } from "react-dom";

const initialState = {
  errors: {
    email: null,
  },
};

export function FormState({
  action,
}: {
  action: (currentState: any, formData: FormData) => Promise<any>;
}) {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <>
      <form action={formAction} className="w-full">
        <label className="text-xs">Email</label>
        <div className="flex border border-black dark:border-gray-100/50 shadow-sm rounded-lg overflow-hidden">
          <div className="flex flex-col flex-1">
            <input
              type="email"
              name="email"
              className="px-2 h-8 py-1 text-sm"
            />
          </div>
          <input
            type="submit"
            value="Sign up"
            className="bg-black text-white py-1 px-2 text-sm h-8 flex-grow-0 cursor-pointer"
          />
        </div>
      </form>
      {state.errors.email}
    </>
  );
}
