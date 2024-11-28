
"use client";

import Link from "next/link";
import Image from "next/image";
import Chevron from "public/Imgs/chevron-right.png";
import { useEffect, useState, useRef } from "react";

type Project = { id: number; title: string; date: string; imgLogo: string };

function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(
      "https://leuscgqzalmrfujkzpbd.supabase.co/storage/v1/object/sign/ourproject/singleImg/projects.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvdXJwcm9qZWN0L3NpbmdsZUltZy9wcm9qZWN0cy5qc29uIiwiaWF0IjoxNzMyNzgwODAwLCJleHAiOjE3NjQzMTY4MDB9.ahM_1of1bv5eTriiI7IbRASpxvxXvDzwo_FB_-XBr7I&t=2024-11-28T08%3A00%3A00.538Z"
    )
      .then((response) => response.json())
      .then((data) => {
        const projects = data.ourprojects || [];
        const limitedProjects = projects.slice(0, 4);
        setProjects(limitedProjects);
      });

    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (sliderRef.current) {
      const totalSlides = projects.length;
      const newIndex = (currentIndex + 1) % totalSlides;
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const totalSlides = projects.length;
      const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section className="w-full py-4 sm:py-16">
      <div className="container m-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
            OUR <span className="text-blue-600">PROJECTS</span>
          </h2>
          <Link href="/portfolio">
            <button className="flex items-center group justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-sm text-white transition-colors">
              All projects{" "}
              <Image src={Chevron} alt="Chevron right" className="w-4 h-4 group-hover:scale-125 transition-all duration-300 " />
            </button>
          </Link>
        </div>

        {isMobile ? (
          <div className="relative">
            <div className="overflow-hidden" ref={sliderRef}>
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="min-w-full flex-shrink-0 flex flex-col items-center text-center"
                  >
                    <Link href={`/portfolio/${project.id}`}>
                      <div className="group relative w-full rounded-2x p-5 text-white text-center shadow-lg transition-all duration-300 hover:shadow-xl mb-12">
                        <h3 className="text-xl font-bold mb-2 text-center">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 pb-14">{project.date}</p>
                        <div className="flex-grow relative w-full">
                          <Image
                            width={500}
                            height={300}
                            src={project.imgLogo}
                            alt={project.title}
                            layout="intrinsic"
                            className="m-auto z-0 opacity-100 group-hover:scale-[1.07] duration-1000"
                          />
                        </div>
                        <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gradient-to-b from-black to-gray-800 duration-1000 rounded-[140px] flex items-center justify-center">
                          Learn more <Image src={Chevron} alt="Logo" />
                        </button>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              ›
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            {projects.map((project) => (
              <Link href={`/portfolio/${project.id}`} key={project.id}>
                <div className="group relative h-[400px] w-full overflow-hidden text-center rounded-2xl bg-gradient-to-b from-black to-gray-800 p-5 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-[16px] font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 pb-14">{project.date}</p>
                  <Image
                    width={150}
                    height={300}
                    src={project.imgLogo}
                    alt={project.title}
                    layout="intrinsic"

                    className="inset-0 m-auto z-0 opacity-100 group-hover:scale-[1.07] duration-1000"
                  />
                  <button className="w-[150px] absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition ease-in-out bg-gradient-to-b from-black to-gray-800 duration-1000 rounded-[140px] flex items-center justify-center">
                    Learn more <Image src={Chevron} alt="Logo" />
                  </button>
                </div>
              </Link>
              // change
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsPage;
