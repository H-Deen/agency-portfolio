import { useState } from "react";
import Input from "../Ui/Input";
import Textarea from "../Ui/Textarea";
import { Send } from "lucide-react";
import Button from "../Ui/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mdkgkqjq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.ok) {
        setSuccessMessage("Message Sent! We'll get back to you as soon as possible.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setSuccessMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="lg:col-span-2">
      <h2 className="heading-sm">Send Us a Message</h2>
      <p className="mt-2 text-muted-foreground">
        Fill out the form below and we&#39;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input
            id="name"
            name="name"
            label="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>

        <Input
          id="subject"
          name="subject"
          label="Subject"
          value={formData.subject}
          onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project..."
            rows={6}
          />
        </div>

        <Button
          type="submit"
          className="button-primary w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send size={16} />
        </Button>

        {successMessage && (
          <p className="mt-4 text-green-600 font-medium">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;