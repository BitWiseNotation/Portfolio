import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa'


const socials = [
    {icon: <FaGithub/>, path: 'https://github.com/BitWiseNotation'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/yudhvirsingh1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'},
    {icon: <FaTwitter/>, path: 'https://x.com/Notviperoxide'},
    {icon: <FaFacebook/>, path: 'https://www.facebook.com/profile.php?id=61573967510693'},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/yudhvirsingh_04/'},
]

const Social =({ containerStyles, iconStyles})=>{
    return <div className={containerStyles}>
        {socials.map( (item, index)=>{
            return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            )
        })}    
    </div>;
};

export default Social;
