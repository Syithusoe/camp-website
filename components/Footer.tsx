import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterProps) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center items-center mb-24">
      <div className="padding-container max-container w-full flex flex-col gap-14">
        <div className="flex flex-col justify-center items-start gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>
          <div className="flex flex-wrap  gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((column) => (
              <FooterColumn title={column.title} key={column.title}>
                <ul className="flex flex-col gap-4 text-gray-500">
                  {column.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn
                title={FOOTER_CONTACT_INFO.title}
                key={FOOTER_CONTACT_INFO.title}
              >
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex md:flex-col lg:flex-row gap-4"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-900">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4 text-gray-400 regular-14">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="social" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-200" />
        <p className="regular-14 w-full text-center text-gray-500">
          2024 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
