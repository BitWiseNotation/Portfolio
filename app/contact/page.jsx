'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { motion } from "framer-motion";

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

const Contact = () =>{
    return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay: 2.4, duration:0.4, ease:"easeIn"}}} className="py-6">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/*form */}
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                        <h3 className="text-4xl text-accent">Let's work together</h3>
                        <p className="text-white/60">Whether it's a big idea or a quick question — I'd love to hear from you.</p>
                        {/*input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="Firstname"/>
                            <Input type="lastname" placeholder="Lastname"/>
                            <Input type="email" placeholder="Email address"/>
                            <Input type="phone" placeholder="Phone number"/>
                        </div>
                    </form>
                </div>
                {/*info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">Info</div>
            </div>
        </div>
    </motion.section>);
};

export default Contact;