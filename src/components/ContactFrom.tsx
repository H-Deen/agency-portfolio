import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { Send } from "lucide-react";
import Button from "./Button";

const ContactFrom = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert("Message Sent! We'll get back to you as soon as possible.");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            setIsSubmitting(false);
        }, 1500);
    };
    
    return (
        <div className="lg:col-span-2">
            <h2 className="heading-sm">Send Us a Message</h2>
            <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&#39;ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="name" className="block mb-2 font-medium">
                            Your Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                            Email Address
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com" />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                        Subject
                    </label>
                    <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Inquiry" />
                </div>

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
                        rows={6} />
                </div>

                <Button
                    type="submit"
                    className="button-primary w-full md:w-auto"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} />
                </Button>
            </form>
        </div>
    )
}

export default ContactFrom