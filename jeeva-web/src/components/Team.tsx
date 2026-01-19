import { Linkedin } from 'lucide-react';
import teamData from '../data/team.json';

interface TeamMember {
  name: string;
  designation: string;
  background?: string;
  photo: string;
  social: string;
}

export default function Team() {
  const leadership = teamData.founders_leadership as TeamMember[];

  return (
    <section id="team" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Founders & Leadership
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Visionaries and innovators dedicated to transforming emergency healthcare in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100/80 rounded-[2rem] p-10 transition-all duration-500 hover:shadow-[0_22px_50px_-12px_rgba(59,130,246,0.12)] hover:-translate-y-3 animate-fade-up overflow-hidden text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative mb-10 mx-auto w-36 h-36">
                <div className="absolute inset-0 bg-[#3B82F6]/5 rounded-full scale-110 group-hover:scale-125 transition-transform duration-700 blur-2xl"></div>
                <div className="relative w-full h-full p-2 bg-white rounded-full shadow-sm z-10 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-2 border-gray-50"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1F2937] mb-2 tracking-tight transition-colors duration-300 group-hover:text-[#3B82F6]">
                {member.name}
              </h3>

              <p className="text-[#3B82F6] font-bold mb-6 text-xs uppercase tracking-[0.2em]">
                {member.designation}
              </p>

              {member.background && (
                <p className="text-[#64748B] leading-[1.8] mb-10 text-[0.9375rem] max-w-[280px] mx-auto font-medium">
                  {member.background}
                </p>
              )}

              <div className="flex justify-center pt-2">
                <a
                  href={member.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social w-12 h-12 bg-gray-50 text-[#6B7280] rounded-2xl flex items-center justify-center hover:bg-[#3B82F6] hover:text-white transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                  aria-label={`${member.name}'s social profile`}
                >
                  <Linkedin size={20} className="transition-transform duration-500 group-hover/social:rotate-[360deg]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <button
            onClick={() => window.history.pushState({}, '', '/team')}
            className="inline-flex items-center gap-2 bg-[#1F2937] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#374151] transition-all transform hover:scale-[1.02] shadow-lg"
          >
            Explore All Team Members
          </button>
        </div>
      </div>
    </section>
  );
}
