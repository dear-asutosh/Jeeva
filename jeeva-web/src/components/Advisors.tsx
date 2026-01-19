import { Linkedin } from 'lucide-react';
import teamData from '../data/team.json';

export default function Advisors() {
    const advisors = teamData.advisory_board;

    return (
        <section id="advisors" className="py-24 px-6 bg-white border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
                        Board of Advisors
                    </h2>
                    <p className="text-xl text-[#0D9488] font-medium mb-6 uppercase tracking-wider">
                        Guiding JEEVA with Experience and Impact
                    </p>
                    <div className="w-24 h-1 bg-[#0D9488] mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 items-center justify-center">
                    {advisors.map((advisor, index) => (
                        <div
                            key={index}
                            className={`group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center animate-fade-up`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-[#0D9488]/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 blur-xl"></div>
                                <img
                                    src={advisor.photo}
                                    alt={advisor.name}
                                    className="w-40 h-40 rounded-full object-cover relative z-10 border-4 border-black shadow-xl group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-[#1F2937] mb-2 leading-tight">
                                {advisor.name}
                            </h3>

                            <p className="text-[#0D9488] font-semibold mb-3 tracking-wide text-sm uppercase">
                                {advisor.designation}
                            </p>
                            <a
                                href={advisor.social}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#F3F4F6] text-[#6B7280] rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300 transform group-hover:rotate-[360deg]"
                                aria-label={`${advisor.name}'s LinkedIn profile`}
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
