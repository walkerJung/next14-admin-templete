"use server";

import { signIn } from "../../auth";

export const authenticate = async (prevState, formData) => {
  const { loginId, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { loginId, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
