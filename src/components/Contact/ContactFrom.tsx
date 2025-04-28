'use client'

import { useActionState } from 'react'
import action from '@/actions/contact-form'
import Input from "../Ui/Input";
import Textarea from "../Ui/Textarea";
import { Send } from "lucide-react";
import Button from "../Ui/Button";

const ContactForm = () => {
  const [status, formAction, isPending] = useActionState(action, null);

  if (status?.success) {
    return (
      <p className="text-green-600 text-center text-2xl font-medium">{status.message}</p>
    );
  }

  return (
    <div className="lg:col-span-2">
      <h2 className="heading-sm">Send Us a Message</h2>
      <p className="mt-2 text-muted-foreground">
        Fill out the form below and we&#39;ll get back to you as soon as possible.
      </p>

      <form action={formAction} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            id="name"
            name="name"
            label="Your Name"
            required
            placeholder="John Doe"
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Email Address"
            required
            placeholder="john@example.com"
          />
        </div>

        <Input
          id="subject"
          name="subject"
          label="Subject"
          required
          placeholder="Project Inquiry"
        />

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your project..."
            rows={6}
          />
        </div>

        {!status?.success && status?.message && (
          <p className="text-red-600 mt-4 font-medium">{status.message}</p>
        )}

        <Button
          type="submit"
          className="button-primary w-full md:w-auto"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Send Message"}
          <Send size={16} />
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
