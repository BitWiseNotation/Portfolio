'use client';

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';


const services =[
    {
        num: '01',
        title: "Web Development",
        description: "I design and build responsive, high-performance websites tailored to your goals. From sleek landing pages to dynamic web apps, I turn ideas into clean, functional, and scalable digital experiences. Whether it's frontend, backend, or full-stack — I ensure your site looks great, loads fast, and works flawlessly across devices.Tech I work with: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js, MongoDB, and more.",
        href: ""
    },
    {
        num: '02',
        title: "SEO Optimization",
        description: "I help websites get found. With strategic SEO practices, I optimize your site to rank higher on search engines, drive more organic traffic, and improve overall visibility. From keyword targeting and meta tags to speed optimization and mobile responsiveness, I ensure your website is both user-friendly and search-engine friendly.Services include:Keyword research, on-page optimization, performance tuning, SEO audits, and technical fixes.",
        href: ""
    },
    {
        num: '03',
        title: "Backend Development & Server Management",
        description: "I build the backbone of your digital product — scalable, secure, and reliable backend systems. From setting up and managing servers to designing robust APIs and databases, I ensure everything behind the scenes runs smoothly. Whether it’s handling user authentication, database architecture, or server deployment, I make sure your infrastructure is fast, secure, and production-ready.What I offer:API development, database integration, server setup & deployment, performance tuning, and security best practices.Tech I work with: Node.js, Express, MongoDB, MySQL, Linux servers, NGINX, PM2, and cloud platforms.",
        href: ""
    },
    {
        num: '04',
        title: "Virtual Tech Support",
        description: "I provide remote assistance for everyday tech issues — from fixing software bugs and installing drivers to diagnosing hardware problems and optimizing system performance. Whether you're dealing with a slow PC, network issues, or system crashes, I offer practical, real-time support to get your devices running smoothly again.What I help with:System cleanups, software installations, basic hardware troubleshooting, driver updates, connectivity issues, and general PC performance tuning.Support available for: Windows, Linux, basic networking, and everyday software tools.",
        href: ""
    },
];

import {motion} from "framer-motion";

const Services = () => {
    return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div 
            initial={{opacity:0}} 
            animate={{
                opacity:1, 
                transition: {delay:2.4, duration:0.4, ease:"easeIn"},
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map((service,index) =>{
                    return (
                    <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        {/*tap */}
                        <div className='w-full flex justify-between items-center'>
                            <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                            <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl "/>
                            </Link>
                        </div>
                        {/*Heading */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                        {/*descriptions */}
                        <p className="text-white/60">{service.description}</p>
                        {/*border */}
                        <div className='border-b border-white/20 w-full'></div>
                    </div>
                    );
                })}
            </motion.div>
        </div>
    </section>
    );
};

export default Services;