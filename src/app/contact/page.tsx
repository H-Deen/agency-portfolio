// import React, { useState } from "react";
// import { Send, Mail, MapPin, Phone } from "lucide-react";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Button } from "@/components/ui/button";
// // import { useToast } from "@/hooks/use-toast";

// const Contact = () => {

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         subject: "",
//         message: ""
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Simulate form submission
//         setTimeout(() => {
//             toast({
//                 title: "Message Sent!",
//                 description: "We'll get back to you as soon as possible.",
//             });
//             setFormData({
//                 name: "",
//                 email: "",
//                 subject: "",
//                 message: ""
//             });
//             setIsSubmitting(false);
//         }, 1500);
//     };

//     return (
//         <>
//             <section className="bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background">
//                 <div className="container-custom py-16 md:py-24">
//                     <div className="max-w-3xl">
//                         <h1 className="heading-lg">Get in Touch</h1>
//                         <p className="mt-4 text-lg text-muted-foreground">
//                             Have a project in mind? Let's talk about how we can help bring your ideas to life.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-16">
//                 <div className="container-custom">
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//                         <div className="lg:col-span-2">
//                             <h2 className="heading-sm">Send Us a Message</h2>
//                             <p className="mt-2 text-muted-foreground">
//                                 Fill out the form below and we'll get back to you as soon as possible.
//                             </p>

//                             <form onSubmit={handleSubmit} className="mt-6 space-y-5">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                                     <div>
//                                         <label htmlFor="name" className="block mb-2 font-medium">
//                                             Your Name
//                                         </label>
//                                         <Input
//                                             id="name"
//                                             name="name"
//                                             value={formData.name}
//                                             onChange={handleChange}
//                                             required
//                                             placeholder="John Doe" />
//                                     </div>
//                                     <div>
//                                         <label htmlFor="email" className="block mb-2 font-medium">
//                                             Email Address
//                                         </label>
//                                         <Input
//                                             id="email"
//                                             name="email"
//                                             type="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             required
//                                             placeholder="john@example.com" />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label htmlFor="subject" className="block mb-2 font-medium">
//                                         Subject
//                                     </label>
//                                     <Input
//                                         id="subject"
//                                         name="subject"
//                                         value={formData.subject}
//                                         onChange={handleChange}
//                                         required
//                                         placeholder="Project Inquiry" />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="message" className="block mb-2 font-medium">
//                                         Message
//                                     </label>
//                                     <Textarea
//                                         id="message"
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         required
//                                         placeholder="Tell us about your project..."
//                                         rows={6} />
//                                 </div>

//                                 <Button
//                                     type="submit"
//                                     className="button-primary w-full md:w-auto"
//                                     disabled={isSubmitting}
//                                 >
//                                     {isSubmitting ? "Sending..." : "Send Message"}
//                                     <Send size={16} />
//                                 </Button>
//                             </form>
//                         </div>

//                         <div>
//                             <h2 className="heading-sm">Contact Information</h2>
//                             <p className="mt-2 text-muted-foreground">
//                                 Reach out to us directly using the following details.
//                             </p>

//                             <div className="mt-6 space-y-6">
//                                 <div className="flex gap-4">
//                                     <div className="mt-1 p-3 rounded-full bg-primary/10 text-primary">
//                                         <Mail size={20} />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold">Email</h3>
//                                         <p className="mt-1 text-muted-foreground">contact@devstudio.com</p>
//                                         <p className="text-muted-foreground">support@devstudio.com</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4">
//                                     <div className="mt-1 p-3 rounded-full bg-primary/10 text-primary">
//                                         <MapPin size={20} />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold">Office</h3>
//                                         <p className="mt-1 text-muted-foreground">
//                                             123 Tech Street<br />
//                                             San Francisco, CA 94107<br />
//                                             United States
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-4">
//                                     <div className="mt-1 p-3 rounded-full bg-primary/10 text-primary">
//                                         <Phone size={20} />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-semibold">Phone</h3>
//                                         <p className="mt-1 text-muted-foreground">+1 (555) 123-4567</p>
//                                         <p className="text-muted-foreground">+1 (555) 987-6543</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-8 p-6 bg-secondary/50 dark:bg-secondary/30 rounded-lg">
//                                 <h3 className="font-semibold">Business Hours</h3>
//                                 <div className="mt-2 space-y-2 text-muted-foreground">
//                                     <p className="flex justify-between">
//                                         <span>Monday - Friday:</span>
//                                         <span>9:00 AM - 6:00 PM</span>
//                                     </p>
//                                     <p className="flex justify-between">
//                                         <span>Saturday:</span>
//                                         <span>10:00 AM - 4:00 PM</span>
//                                     </p>
//                                     <p className="flex justify-between">
//                                         <span>Sunday:</span>
//                                         <span>Closed</span>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Contact;
