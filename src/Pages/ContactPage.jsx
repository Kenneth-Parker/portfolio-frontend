import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ContactCard from '../Components/ContactCard';

const ContactPage = () => {

    const teamMembers = [
        {
            name: 'Kenneth Parker',
            imageUrl: 'https://avatars.githubusercontent.com/u/131785555?v=4',
            linkedInLink: 'https://www.linkedin.com/in/-KennethParker',
            githubLink: 'https://github.com/Kenneth-Parker',
            info: `As a Pursuit full stack web developer with an entrepreneurial mindset, I'm passionate contact building innovative web applications that solve real-world problems`
        }
    ];


    return (
        <><div className="contact-page">
            <h1>Contact The Developer</h1>
           
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <ContactCard
                        key={index}
                        name={member.name}
                        imageUrl={member.imageUrl}
                        linkedInLink={member.linkedInLink}
                        githubLink={member.githubLink}
                        info={member.info}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default ContactPage;
