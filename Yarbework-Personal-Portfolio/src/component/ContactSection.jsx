import React, { useState } from 'react'
import {cn} from '../lib/utils'
import {Instagram, Linkedin, Mail, MapPin, Phone, Plane, Send} from 'lucide-react'
export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        setTimeout(()=>{
            alert(
                "Message sent"
            )
            
        setIsSubmitting(false);
        }, 1500)
    }
  return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Get In <span className="text-primary">Touch</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-8 text-primary'>Contact Information</h3>
                        <div className='space-y-6 justify-center'>
                            <div className='flex items-start space-c-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:yarbemohaz3517@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                        yarbemohaz3517@gmail.com
                                    </a>
                                </div>
                            </div>

                             <div className='flex items-start space-c-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+251968762146" className='text-muted-foreground hover:text-primary transition-colors'>
                                        +251968762146
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-c-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                                       Addis Ababa, Ethiopia
                                    </a>
                                </div>
                            </div>


                        </div>
                        <div className='pt-6'>
                            <h4 className='font-medium mb-4 text-primary'>Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href="#" target='_blank' className='hover:text-primary'>
                                    <Linkedin />
                                </a>
                                <a href="" target='_blank' className='hover:text-primary'>
                                    <Instagram />
                                </a>
                                <a href="https://t.me/yarbezzz" target='_blank' className='hover:text-primary'>
                                    <Send />
                                </a>                            
                            </div>
                        </div>
                    </div>
                    <div className='bg-card p-8 rounded-lg shadow-xs' onSubmit={handleSubmit}>
                        <h3 className='text-2xl font-semibold mb-6 text-primary'>Send a Message</h3>
                        <form>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'> Your Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    id="name"
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='Yarbework Mohammed...'
                                  />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'> Your Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    id="email"
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='yarbework@gmail.com'
                                  />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'> Your Message</label>
                                <textarea 
                                    name="message"
                                    id="message"
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                    placeholder='Hello Yarbework, I would like to talk about...'
                                  />
                            </div>         
                            <button 
                                
                                type='submit' 
                                disabled={isSubmitting}
                                className={cn ("cosmic-button w-full flex items-center justify-center gap-2"
                            )}>
                                {isSubmitting ? "Sending" : "Send Message"}<Send size={16}/>
                            </button>                   
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

