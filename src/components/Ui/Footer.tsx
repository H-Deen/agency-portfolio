import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:contact@devstudio.com", icon: Mail, label: "Email" },
];

const footerLinks = [
  {
    title: "Services",
    links: ["Web Development", "Mobile Apps", "UI/UX Design", "DevOps"],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-border py-12 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + Social */}
          <div>
            <Link href="/" className="font-bold text-xl">
              DevStudio<span>.</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Building exceptional digital experiences with cutting-edge technology.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} aria-label={label} className="hover:text-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) =>
                  typeof link === "string" ? (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ) : (
                    <li key={link.name}>
                      <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground">
              <p>123 Tech Street</p>
              <p>San Francisco, CA 94107</p>
              <p className="mt-3">contact@devstudio.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DevStudio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
