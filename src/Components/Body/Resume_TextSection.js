import React, { useState } from "react";
import Button from "./Button";
import "./resume_TextSection.css";


function TextSection(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandSection = () => {
        isExpanded ? setIsExpanded(false) : setIsExpanded(true);
    }

    return (
        <>
            <div className="mlt-resume-text-section-grid mlt-resume-section">
                <h1>Resume</h1>
                <p>
                    Last year I decided to follow my dreams and turn this hobby into a new professional career. I left my previous job, shortly after I applied to a JavaScript advanced course with React.
                </p>

                {isExpanded ?
                    <>
                        <p>
                            I decided JavaScript is а good starting point, because of the possibility to work at frontend and backend in a single language, and because of my previous experience. Meanwhile I’ve accomplished a few other JavaScript courses and two of the Cisco's NDG modules to examine my knowledges in Linux server's administration.
                        </p>
                        <p>
                            I’m having interest in DevOps area too. In my free time I like to read books, hiking, or gym.
                        </p>
                        <p>
                            What I am looking for is the opportunity to focus my efforts to the right direction, to learn new things, and the challenges to solve tasks that are beyond my current knowledge. I’m a good student and fast learner, and I believe the most effective way to learn something is to teach it – that's why I was very valuable in my previous area.
                        </p>
                        <p>
                            I'm a Mechanical Engineer and Doctor of Engineering Science. My doctor’s thesis is in the field of effective production plant management by the help of the modern systems for enterprise’s knowledge management, so called ERP/PLM systems and related to them satellite software.
                        </p>
                        <p>
                            My employment history looks quite long – actually, it is not. For the past 10 years (2011 – 2021) I’ve worked as consultant and organizational engineer in three different companies, but they all belong to the same structure. One interesting fact during this period is that in 2018, as result of two developed by me documents, our team held a consultation meeting with the President of the Republic of Bulgaria.
                        </p>
                        <p>
                            Previously in (2007 – 2011), I was working as CNC machine technologist, production, and organizational engineer and later as project manager at a metal cutting company where the CEO was a board member of directors of the above organization. During the time of 2008 – 2010, our team managed to increase the efficiency of more than 60 production cells by 5 to 10 times via organizational changes and internal training using minimal investment. This was one of the key factors that allowed the company to survive during the crisis.
                        </p>
                        <p>
                            After defending my dissertation in 2015, I started supporting my employer's online presentation as a hobby.  This was the beginning and the end of my previous career because I found out I enjoy working in this direction.
                        </p>
                        <p>
                            Since then, I’ve learned how to administer and automate Linux servers at a satisfactory level. I’ve gained semiprofessional experience with CMS systems as MediaWiki and WordPress – deployment, administration, and customization by creating features (plugins/extensions) in HTML/CSS, JavaScript, PHP, Lua, etc. Few years ago, I’ve setup a home laboratory, based on a bare metal hypervisor which allows me to learn many things about virtualization's technologies at a practical level. And here we come to the beginning of this resume.
                        </p>
                        <Button text="Show less" onClick={expandSection} />
                    </>
                    :
                    <Button text="Read more" onClick={expandSection} />
                }
            </div>

        </>
    );
}

export default TextSection;