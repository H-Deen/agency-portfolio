'use client'

import ContactFrom from "@/components/Contact/ContactFrom";
import ContactInfo from "@/components/Contact/ContactInfo";

const Contact = () => {

    return (
        <>
            <section className="bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background">
                <div className="container-custom py-16 md:py-24">
                    <div className="max-w-3xl">
                        <h1 className="heading-lg">Get in Touch</h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Have a project in mind? Let&#39;s talk about how we can help bring your ideas to life.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <ContactFrom />
                        <ContactInfo />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
