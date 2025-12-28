import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  // this layout run before signup and signin page

  // it is common for both signup and signin page
  if (session) {
    redirect("/dashboard");
  }

  return <div>{children}</div>;
}
