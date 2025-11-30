import TimelineCard from "../UI/TimelineCard";
import { GraduationCap, Briefcase, Certificate } from "@phosphor-icons/react";

const timelineData = [
    {
        year: "2023",
        title: "Senior Frontend Developer",
        organization: "Creative Solutions Inc.",
        period: "Jul 2023 - Present",
        description: "Leading the frontend team in building responsive and accessible web applications. Implemented a new design system that improved development efficiency by 60% and enhanced site performance by 40%. Mentoring junior developers and establishing best practices.",
        icon: Briefcase,
        type: 'experience' as const
    },
    {
        year: "2019-2023",
        title: "Bachelor of Science in Computer Science",
        organization: "University of Technology",
        period: "Sep 2019 - Jun 2023",
        description: "Graduated with honors. Focused on software engineering, algorithms, and artificial intelligence. Led the university coding club and organized several hackathons. Completed a capstone project on machine learning applications.",
        icon: GraduationCap,
        type: 'education' as const
    },
    {
        year: "2019",
        title: "Full Stack Web Development Bootcamp",
        organization: "Tech Academy",
        period: "Jan 2019 - Jun 2019",
        description: "Intensive 6-month bootcamp covering modern web technologies including React, Node.js, and database management. Built multiple full-stack projects and learned industry best practices. Graduated top of class.",
        icon: Certificate,
        type: 'education' as const
    },
    {
        year: "2018",
        title: "UI/UX Designer",
        organization: "Design Studio",
        period: "Jun 2018 - Dec 2018",
        description: "Designed user interfaces for mobile and web applications. Conducted user research and usability testing to improve user experience. Created design systems and prototypes that increased client satisfaction by 35%.",
        icon: Briefcase,
        type: 'experience' as const
    },
    {
        year: "2017-2018",
        title: "Freelance Web Developer",
        organization: "Self-Employed",
        period: "Jan 2017 - May 2018",
        description: "Developed custom websites for small businesses using WordPress and HTML/CSS. Managed client relationships and delivered projects on time and within budget. Built a portfolio of 15+ successful projects.",
        icon: Briefcase,
        type: 'experience' as const
    },
    {
        year: "2016",
        title: "Intern Software Engineer",
        organization: "Tech Giant Corp",
        period: "Summer 2016",
        description: "Assisted in the development of internal tools using Python. Collaborated with senior engineers to debug and optimize code. Learned software development lifecycle and professional coding standards.",
        icon: GraduationCap,
        type: 'education' as const
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 relative">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col w-full md:w-1/2 items-center justify-center px-8 mb-16">
                    <h2 className="text-3xl font-bold text-white md:text-5xl mb-4">
                        My <span className="text-[var(--color-accent)]">Journey</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Education & Experience Timeline
                    </p>
                </div>

                {/* Timeline Card */}
                <div className="relative flex flex-col w-full md:w-1/2 items-center justify-center px-8 mb-16 min-h-[500px]">
                    <TimelineCard items={timelineData} />
                </div>
            </div>
        </section>
    )
}

export default Education
