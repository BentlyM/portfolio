"use client";

import { useState } from "react";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-7xl px-4">
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
              <p className="mb-2">Email: contact@example.com</p>
              <p>Location: New York, NY</p>
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
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitSuccess && (
                <div className="mt-2 p-3 bg-success-100/20 text-success rounded-lg text-sm">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
