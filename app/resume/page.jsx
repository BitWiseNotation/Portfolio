'use client';

import { Description } from '@radix-ui/react-dialog';
import {
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNodeJs,
    FaPython,
    FaJava,
    FaGit,
    FaGithub,
    FaLinux,
    FaMicrochip,
    FaTools,
    FaNetworkWired,
    FaCode
} from 'react-icons/fa';
import {
    SiTailwindcss, 
    SiNextdotjs, 
    SiC, 
    SiCplusplus, 
    SiAdobephotoshop, 
    SiMysql, 
    SiMongodb, 
    SiNginx, 
    SiVisualstudiocode,
    SiPostman 
} from 'react-icons/si';



// about data

const about ={
    title: 'About me',
    description:"I'm Yudhvir Singh, a versatile developer with a passion for building clean, efficient, and reliable tech. From full-stack web apps and custom software to backend systems, hardware fixes, and a touch of cybersecurity — I work across the stack to solve real-world problems with smart, scalable solutions",
    info:[
        {
            fieldName: "Name",
            fieldValue: "Yudhvir Singh"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+1) 780 660 4036"
        },
        {
            fieldName: "Experience",
            fieldValue: "5+ Years"
        },
        {
            fieldName: "Facebook",
            fieldValue: "Yudhvir Singh"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Email",
            fieldValue: "bitwisenotation@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "English,Hindi,Punjabi"
        },
    ]
};

// experience data

const experience = {
    icon: "/assets/resume/badge.svg",
    title: 'My Experience',
    description: "Over the years, I’ve built a wide range of projects — from dynamic e-commerce platforms and personal portfolio websites to Python automation scripts that streamline tasks and boost efficiency. I’ve designed logos that reflect brand identity, and provided hands-on support for countless hardware and software issues. This mix of creative, technical, and practical experience has shaped me into a well-rounded problem solver ready to take on any challenge.",
    items: [
        {
            company:"WearOverclothing",
            position:"Full-Stack Developer",
            duration: "2024-current"
        },
        {
            company: "E-commerce Startup",
            position: "Freelance Web Developer",
            duration: "2023-2024"
        },
        {
            company: "Web Creators",
            position: "Back-End Developer",
            duration: "Summer 2023"
        },
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "2021-2022"
        },
    ],
};

//education data
const educations = {
    icon: "/assets/resume/badge.svg",
    title: 'My Education',
    description: "I’ve completed the Open Source Computer Science curriculum (OSSU) from GitHub, gaining a solid foundation in programming, systems, and algorithms. Alongside that, I’ve taken courses from Duke University in Python, C, C++, and Java, and expanded into web technologies like HTML, CSS, JavaScript, React, and Node.js. I’ve also studied networking and cybersecurity through CompTIA Network+ and Security+ resources, and explored low-level programming with x86.",
    items: [
        {
            institution:"Online Course Platform",
            degree:"Low-Level Programming Certification",
            duration: "2024"
        },
        {
            institution:"Online Course Platform",
            degree:"Comptia Security+ Prep Course",
            duration: "2023"
        },
        {
            institution:"Online Course Platform",
            degree:"Comptia Security+ Prep Course",
            duration: "2022"
        },
        {
            institution:"Online Course Platform",
            degree:"Python Programming Course",
            duration: "2021"
        },
        {
            institution:"Online Course Platform",
            degree:"C Programming Course",
            duration: "2020"
        },
        {
            institution:"Online Course Platform",
            degree:"C++ Programming Course",
            duration: "2020"
        },
        {
            institution:"Online Course Platform",
            degree:"Open Source Computer Science Curriculum",
            duration: "2019-2020"
        },
        {
            institution:"Online Course Platform",
            degree:"Open Source Computer Science Curriculum",
            duration: "2019-2020"
        },
    ],
};

//skills data

const skills = {
    title: "My Skills",
    description: "I work across the full stack — building responsive web apps with HTML, CSS, JavaScript, React, and Node.js, and developing scripts and tools using Python, C, C++, and Java.My experience spans backend systems, database management, and basic cybersecurity and networking (CompTIA Network+ & Security+). I’ve also explored x86 architecture for low-level understanding.Beyond code, I offer hardware/software support and create clean, modern logos and visuals using tools like Figma and Photoshop.",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "Html5"
        },
        {
            icon: <FaCss3/>,
            name: "Css3"
        },
        {
            icon: <FaJs/>,
            name: "Js"
        },
        {
            icon: <FaReact/>,
            name: "React,js"
        },
        {
            icon: <FaFigma/>,
            name: "Figma"
        },
        {
            icon: <FaNodeJs/>,
            name: "Node.js"
        },
        {
            icon: <FaPython/>,
            name: "Python"
        },
        {
            icon: <FaJava/>,
            name: "Java"
        },
        {
            icon: <FaGit/>,
            name: "Git"
        },
        {
            icon: <FaGithub/>,
            name: "GitHub"
        },
        {
            icon: <FaLinux/>,
            name: "Linux"
        },
        {
            icon: <FaMicrochip/>,
            name: "X86"
        },
        {
            icon: <FaTools/>,
            name: "Hardware"
        },
        {
            icon: <FaNetworkWired/>,
            name: "Networking"
        },
        {
            icon: <FaCode/>,
            name: "Automation Scripting"
        },
        {
            icon: <SiTailwindcss/>,
            name: "Tailwind.css"
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.js"
        },
        {
            icon: <SiC/>,
            name: "C"
        },
        {
            icon: <SiCplusplus/>,
            name: "C++"
        },
        {
            icon: <SiAdobephotoshop/>,
            name: "Photoshop"
        },
        {
            icon: <SiMysql/>,
            name: "Mysql"
        },
        {
            icon: <SiMongodb/>,
            name: "Mongodb"
        },
        {
            icon: <SiNginx/>,
            name: "Nginx"
        },
        {
            icon: <SiVisualstudiocode/>,
            name: "VS Code"
        },
        {
            icon: <SiPostman/>,
            name: "Postman"
        },
    ]
}

import {Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs";

import { 
    Tooltip, 
    TooltipTrigger, 
    TooltipProvider, 
    TooltipContent 
} from '@radix-ui/react-tooltip'; 

import { ScrollArea } from '@/components/ui/scroll-area';

import { motion } from 'framer-motion';


const Resume = () => {
    return (
        <motion.div  
            initial={{opacity:0}} 
            animate={{opacity: 1, 
            transition: {delay:2.4, duration:0.4, ease:"easeIn"},
            }} 
            className="min-h-[80hv] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto ">
                <Tabs 
                 defaultValue="experience" 
                 className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Educations</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/*Content */}
                    <div className="min-h-[70vh] w-full">
                        {/*experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) =>{
                                            return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex  flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/*dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>)
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/*education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{educations.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {educations.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {educations.items.map((item, index) =>{
                                            return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex  flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/*dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>)
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/*skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill,index)=>{
                                        return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>)
                                    })}
                                </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>


                        {/*about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index)=>{
                                        return (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;