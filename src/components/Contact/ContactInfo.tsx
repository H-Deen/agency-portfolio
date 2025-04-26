import { Mail, MapPin, Phone } from "lucide-react"

const ContactInfo = () => {
    return (
        <div>
            <h2 className="heading-sm">Contact Information</h2>
            <p className="mt-2 text-muted-foreground">
                Reach out to us directly using the following details.
            </p>

            <div className="mt-6 space-y-6">
                <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Mail size={20} />
                    </div>
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="mt-1 text-muted-foreground">contact@devstudio.com</p>
                        <p className="text-muted-foreground">support@devstudio.com</p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h3 className="font-semibold">Office</h3>
                        <p className="mt-1 text-muted-foreground">
                            123 Tech Street<br />
                            San Francisco, CA 94107<br />
                            United States
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Phone size={20} />
                    </div>
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="mt-1 text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-6 bg-secondary/50 dark:bg-secondary/30 rounded-lg">
                <h3 className="font-semibold">Business Hours</h3>
                <div className="mt-2 space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo