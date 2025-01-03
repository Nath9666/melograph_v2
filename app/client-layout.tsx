"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ClientProvider } from "@/components/clientProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientProvider>
        <Navbar />
        <main className="container mx-auto px-4 m-4">{children}</main>
        <Footer />
      </ClientProvider>
    </>
  );
}
