import { Linkedin, ArrowLeft } from 'lucide-react';
import teamData from '../data/team.json';

interface TeamMember {
    name: string;
    designation: string;
    background?: string;
    photo: string;
    social: string;
}

export default function TeamPage() {
    const categories = [
        {
            title: "Advisory Board",
            data: teamData.advisory_board as TeamMember[],
            color: "text-[#0D9488]",
            bg: "bg-[#0D9488]/10",
            hoverBg: "hover:bg-[#0D9488]"
        },
        {
            title: "Founders & Leadership",
            data: teamData.founders_leadership as TeamMember[],
            color: "text-[#3B82F6]",
            bg: "bg-[#3B82F6]/10",
            hoverBg: "hover:bg-[#3B82F6]"
        },
        {
            title: "Core Team",
            data: teamData.core_team as TeamMember[],
            color: "text-[#8B5CF6]",
            bg: "bg-[#8B5CF6]/10",
            hoverBg: "hover:bg-[#8B5CF6]"
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <button
                    onClick={() => window.history.pushState({}, '', '/')}
                    className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#1F2937] transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </button>

                <div className="text-center mb-24 animate-fade-in text-balance">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#1F2937] mb-8 tracking-tight">
                        Our Magnificent <span className="text-gradient">Team</span>
                    </h1>
                    <p className="text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed font-medium">
                        Meet the brilliant minds and compassionate hearts driving the revolution in emergency healthcare across India.
                    </p>
                </div>

                {categories.map((category, catIndex) => (
                    <div key={catIndex} className="mb-32 last:mb-0">
                        <div className="flex flex-col items-center mb-16 animate-fade-in">
                            <h2 className="text-4xl md:text-5xl font-black text-[#1F2937] tracking-tight text-center">
                                {category.title}
                            </h2>
                            <div className={`w-24 h-1.5 rounded-full mt-6 bg-gradient-to-r from-transparent via-current to-transparent ${category.color}`}></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {category.data.map((member, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white border border-gray-100/80 rounded-[2.5rem] p-12 transition-all duration-700 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:-translate-y-4 animate-fade-up overflow-hidden text-center"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Subtle top accent gradient */}
                                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${category.color}`}></div>

                                    <div className="relative mb-12 mx-auto w-40 h-40">
                                        <div className={`absolute inset-0 ${category.bg.replace('/10', '/5')} rounded-full scale-125 group-hover:scale-150 transition-transform duration-1000 blur-3xl`}></div>
                                        <div className="relative w-full h-full p-0.5 bg-black rounded-full shadow-md z-10 transition-transform duration-700 group-hover:scale-105">
                                            <img
                                                src={member.photo}
                                                alt={member.name}
                                                className="w-full h-full rounded-full object-cover border-2 border-gray-50"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-[#1F2937] mb-3 tracking-tight transition-colors duration-500 group-hover:text-current">
                                        {member.name}
                                    </h3>

                                    <p className={`${category.color} font-black mb-8 text-[0.7rem] uppercase tracking-[0.2em]`}>
                                        {member.designation}
                                    </p>

                                    {member.background && (
                                        <p className="text-[#64748B] leading-[1.8] mb-12 text-[0.95rem] font-medium opacity-90">
                                            {member.background}
                                        </p>
                                    )}

                                    <div className="flex justify-center pt-2">
                                        <a
                                            href={member.social}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group/social w-14 h-14 bg-gray-50 text-[#6B7280] rounded-[1.25rem] flex items-center justify-center hover:text-white transition-all duration-700 hover:shadow-xl active:scale-90 ${category.hoverBg}`}
                                            aria-label={`${member.name}'s social profile`}
                                        >
                                            <Linkedin size={24} className="transition-transform duration-700 group-hover/social:rotate-[360deg]" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
