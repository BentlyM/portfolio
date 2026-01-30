"use client";

import { useState, useEffect } from "react";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

const CONTACT_EMAIL = "support@gridnews.io";
const MIN_FORM_OPEN_MS = 5000; // Light bot deterrent: block instant submits

export default function ContactPage() {
  const [formReady, setFormReady] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
    _gotcha: "", // Honeypot – leave empty; bots that fill it are ignored
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setFormReady(true), MIN_FORM_OPEN_MS);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (formData._gotcha.trim().length > 0) return; // Honeypot filled = bot
    if (!formReady) {
      setSubmitError("Please wait a moment before sending.");
      return;
    }

    const body = [
      "",
      `From: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitSuccess(true);
    setFormData({ email: "", subject: "", message: "", _gotcha: "" });
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="max-w-7xl px-4">
        <h1 className={`${title()} mb-12 text-center`}>Contact</h1>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Left column - Info */}
          <div>
            <h2 className={subtitle({ class: "mb-6" })}>Let&apos;s Connect</h2>
            <p className="mb-8 max-w-md">
              I&apos;m currently looking for new opportunities, and my inbox is
              always open. Whether you have a question, a project idea, or just
              want to say hi, I&apos;ll try my best to get back to you as soon
              as possible!
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Contact Details</h3>
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:support@gridnews.io"
                  className="text-primary hover:underline"
                >
                  support@gridnews.io
                </a>
              </p>
              <p>Location: Fort Lauderdale, FL</p>
            </div>

            <div className="socials flex flex-row gap-4 mb-8">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-default-100/50 hover:bg-default-200/50 transition-colors"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-default-100/50 hover:bg-default-200/50 transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-6 rounded-lg border border-default-200/20"
            >
              {/* Honeypot: hidden; bots that fill it are ignored */}
              <div
                className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="_gotcha">Don&apos;t fill this</label>
                <input
                  type="text"
                  id="_gotcha"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData._gotcha}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Your email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  className="w-full"
                  variant="bordered"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Let's collaborate on..."
                  className="w-full"
                  variant="bordered"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="I'd like to discuss..."
                  className="w-full rounded-lg border border-default-200 bg-transparent p-3 text-sm outline-0 transition-all focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                color="primary"
                className="w-full"
                disabled={!formReady}
              >
                {!formReady ? "Please wait..." : "Open email to send"}
              </Button>

              {submitError && (
                <div className="mt-2 p-3 bg-danger-100/20 text-danger rounded-lg text-sm">
                  {submitError}
                </div>
              )}
              {submitSuccess && (
                <div className="mt-2 p-3 bg-success-100/20 text-success rounded-lg text-sm">
                  Your email client should open. Send the message from there.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
