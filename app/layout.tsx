import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex w-full justify-center py-5">
          <nav>
            <ul className="flex gap-5">
              <li>
                <Link href="/ssg-page">SSG page</Link>
              </li>
              <li>
                <Link href="/ssr-page">SSR page</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <section className="flex flex-col text-center gap-4">{children}</section>
        </main>
      </body>
    </html>
  );
}
