"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialty?: string;
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

const teamData: TeamMember[] = [
  {
    name: "Abhijith H",
    role: "Lead Organizer",
    specialty: "Founder & Visionary",
    image: "/team/AbhijithH.png",
    bio: "Passionate about open source and community building",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jane Smith",
    role: "Events Coordinator",
    specialty: "Experience Design",
    image: "/team/pic1.png",
    bio: "Creating memorable experiences for developers",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Alex Johnson",
    role: "Content Lead",
    specialty: "Strategic Communications",
    image: "/team/pic1.png",
    bio: "Storytelling through technology and innovation",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Sarah Wilson",
    role: "Community Manager",
    specialty: "Community Engagement",
    image: "/team/pic1.png",
    bio: "Building bridges between passionate developers",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Mike Chen",
    role: "Tech Lead",
    specialty: "Backend Architecture",
    image: "/team/pic1.png",
    bio: "Backend architect and open source advocate",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Emma Davis",
    role: "Design Lead",
    specialty: "Visual Design",
    image: "/team/pic1.png",
    bio: "Creating beautiful experiences with purpose",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "David Kumar",
    role: "Operations Lead",
    specialty: "Logistics & Planning",
    image: "/team/pic1.png",
    bio: "Making sure everything runs smoothly behind the scenes",
    social: {
      twitter: "https://twitter.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export function Team() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate title on scroll
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }

    // Animate team cards on scroll with stagger
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, rotationX: 90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: 0.5,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full bg-jwhite overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 py-20 md:py-32">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-joranage rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-jyellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-jblue rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl w-full text-center" ref={titleRef}>
          <div className="mb-8 inline-block">
            <span className="px-6 py-3 rounded-full border-2 border-joranage text-joranage font-jfont font-bold text-sm md:text-base uppercase tracking-widest">
              Meet The Team
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-jfont font-bold text-jblue mb-6 leading-tight">
            The People<br />Behind the<br /><span className="text-joranage">Magic</span>
          </h1>

          <p className="text-lg md:text-xl text-jgrey max-w-2xl mx-auto font-light leading-relaxed">
            A diverse group of passionate developers, designers, and creators working together to build an amazing open source community experience.
          </p>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="relative w-full px-6 md:px-12 py-20 md:py-32 bg-gradient-to-b from-jwhite via-jwhite to-jblue bg-opacity-5">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-joranage to-jyellow rounded-full"></div>
              <span className="text-sm font-jfont font-bold text-joranage uppercase tracking-widest">Our Team</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-jfont font-bold text-jblue mb-4">
              Exceptional Talent
            </h2>
            <p className="text-lg text-jgrey font-light max-w-2xl">
              Each team member brings unique expertise and passion to make FOSS Fest an unforgettable experience.
            </p>
          </div>

          {/* Team Cards Grid - 2 columns for better organization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamData.map((member, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative"
              >
                {/* Glow Background */}
                <div className="absolute -inset-px bg-gradient-to-r from-joranage/0 via-joranage/5 to-joranage/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10"></div>

                {/* Main Card */}
                <div className="relative bg-white border-2 border-jgrey/15 rounded-2xl overflow-hidden h-full transform transition-all duration-500 group-hover:border-joranage/50 group-hover:shadow-2xl">
                  {/* Card Layout: Image Left, Content Right */}
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Container */}
                    <div className="relative w-full md:w-2/5 overflow-hidden bg-gradient-to-br from-jyellow/40 via-joranage/20 to-jblue/30 group/image">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center w-full h-full transform transition-transform duration-700 group-hover/image:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-jblue/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content Container */}
                    <div className="relative w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                      {/* Top Content */}
                      <div className="space-y-4">
                        {/* Role Badge */}
                        <div className="inline-flex">
                          <span className="px-4 py-2 rounded-full bg-joranage/10 text-joranage font-jfont font-bold text-xs uppercase tracking-widest border border-joranage/20">
                            {member.specialty}
                          </span>
                        </div>

                        {/* Name and Title */}
                        <div>
                          <h3 className="text-2xl md:text-3xl font-jfont font-bold text-jblue mb-2 group-hover:text-joranage transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-base font-jfont text-joranage font-semibold uppercase tracking-widest">
                            {member.role}
                          </p>
                        </div>

                        {/* Bio */}
                        <p className="text-jgrey text-sm leading-relaxed pt-2">
                          {member.bio}
                        </p>
                      </div>

                      {/* Social Links */}
                      {member.social && (
                        <div className="flex gap-3 pt-6 border-t border-jgrey/15 mt-6">
                          {member.social.twitter && (
                            <a
                              href={member.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Twitter"
                              className="w-10 h-10 rounded-full bg-joranage/10 text-joranage flex items-center justify-center hover:bg-joranage hover:text-jwhite hover:scale-110 transition-all duration-300 font-bold border border-joranage/20"
                            >
                              𝕏
                            </a>
                          )}
                          {member.social.github && (
                            <a
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="GitHub"
                              className="w-10 h-10 rounded-full bg-jgrey/10 text-jblue flex items-center justify-center hover:bg-jblue hover:text-jwhite hover:scale-110 transition-all duration-300 font-bold border border-jgrey/20"
                            >
                              ⚙
                            </a>
                          )}
                          {member.social.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="LinkedIn"
                              className="w-10 h-10 rounded-full bg-jyellow/20 text-joranage flex items-center justify-center hover:bg-jyellow hover:text-jblue hover:scale-110 transition-all duration-300 font-bold border border-jyellow/30"
                            >
                              🔗
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-joranage via-jyellow to-joranage transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider Section */}
      <div className="relative w-full px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-jgrey/30 to-transparent"></div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative w-full px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-4xl md:text-5xl font-jfont font-bold text-jblue mb-6">
              Why Join Us?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Innovation",
                desc: "Be part of a movement shaping the future of open source",
              },
              {
                icon: "🤝",
                title: "Community",
                desc: "Connect with developers, creators, and industry leaders",
              },
              {
                icon: "✨",
                title: "Growth",
                desc: "Learn, network, and grow your skills in an inclusive environment",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl border-2 border-jgrey/15 hover:border-joranage/40 hover:bg-joranage/5 transition-all duration-300"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-jfont font-bold text-jblue mb-3 group-hover:text-joranage transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-jgrey text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full px-6 md:px-12 py-28 bg-gradient-to-br from-jblue via-jblue to-jblue/95 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-joranage/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-jyellow/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-jfont font-bold text-jwhite mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl text-jwhite/90 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            We're passionate about building an inclusive community. If you share our vision, we'd love to hear from you.
          </p>
          <button className="relative inline-flex h-14 md:h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-jyellow focus:ring-offset-2 focus:ring-offset-jblue group">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFAF58_0%,#EB4944_50%,#FFAF58_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-jyellow px-8 text-lg font-jfont font-bold text-jblue hover:bg-joranage hover:text-jwhite transition-all duration-300">
              Get Involved Today
            </span>
          </button>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
