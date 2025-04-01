'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from 'sonner';


import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram} from 'react-icons/fa'

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: "(+1) 780 660 4036",
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: "bitwisenotation@gmail.com",
    },
    {
        icon: <FaFacebook />,
        title: 'Facebook',
        description: "Yudhvir Singh",
    },
    {
        icon: <FaInstagram />,
        title: 'Instagram',
        description: "@YudhvirSingh_04",
    },
]
const Contact = () => {
    const [form, setForm] = useState({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleServiceChange = (value) => {
      setForm({ ...form, service: value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const toastId = toast.loading('Sending message...');
      
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
          });
      
          toast.dismiss(toastId); // 💥 hide the loading toast
      
          if (res.ok) {
            toast.success('Message sent!');
            setForm({ firstname: '', lastname: '', email: '', phone: '', service: '', message: '' });
          } else {
            toast.error('Something went wrong. Try again.');
          }
        } catch (err) {
          toast.dismiss(toastId);
          toast.error('Error connecting to server.');
        }
      };      
      
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  Whether it's a big idea or a quick question — I'd love to hear from you.
                </p>
  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input name="firstname" value={form.firstname} onChange={handleChange} placeholder="Firstname" />
                  <Input name="lastname" value={form.lastname} onChange={handleChange} placeholder="Lastname" />
                  <Input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email address" />
                  <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" />
                </div>
  
                <Select onValueChange={handleServiceChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="SEO Optimization">SEO Optimization</SelectItem>
                      <SelectItem value="Virtual Tech Support">Virtual Tech Support</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
  
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
  
                <Button size="md" type="submit" className="max-w-40">
                  Send message
                </Button>
              </form>
            </div>
  
            {/* Info section stays unchanged */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default Contact;