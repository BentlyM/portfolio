import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { EmailCopy } from "@/components/email-copy";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-4xl px-4">
        <div className="text-center mb-12">
          <p className="font-mono text-xs tracking-[0.2em] text-default-500 mb-3">
            CONTACT
          </p>
          <h1 className={title()}>Let&apos;s Connect</h1>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column - Info */}
          <div>
            <h2 className={subtitle({ class: "mb-6" })}>
              My inbox is always open
            </h2>
            <p className="mb-8 max-w-md text-default-600">
              I&apos;m currently looking for new opportunities. Whether you
              have a question, a project idea, or just want to say hi,
              I&apos;ll try my best to get back to you as soon as possible.
            </p>

            <div className="socials flex flex-row gap-4 mb-8">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-md border border-default-200 hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-md border border-default-200 hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>

          {/* Right column - Direct email */}
          <div className="rounded-lg border border-default-200 bg-background/80 font-mono">
            <div className="flex items-center justify-between border-b border-default-200 px-4 py-2 text-xs text-default-500">
              <span>DIRECT LINE</span>
              <span className="inline-flex items-center gap-1.5 text-primary">
                <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                OPEN
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 p-6">
              <p className="text-sm text-default-600">
                No contact form — this site is static, and email is more
                reliable anyway. Click to copy:
              </p>
              <EmailCopy showMailto />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
