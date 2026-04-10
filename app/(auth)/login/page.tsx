import LoginForm from "@/features/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KonsulTech - Login",
};

export default function Login() {
  return <LoginForm />;
}
