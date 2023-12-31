import { getPages } from "@/sanity/sanity-utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

export const metadata: Metadata = {
  title: "Artistic",
  description: "Generated by Next + Sanity",
};

export const revalidate = 10;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body>
        <header className="LHD">
          <Link href="/">
            <Image src="/logo.svg" width={100} height={100} alt="Artistic" />
          </Link>

          <div className="LP">
            {pages?.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="LPL">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
