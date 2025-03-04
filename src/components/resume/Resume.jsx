import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Full Stack Developer
                  
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Double Dose Digital
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2024 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                A versatile Full Stack Developer at Double Dose Digital, adept at crafting robust web applications using the MERN stack. With a strong focus on both front-end and back-end development, I excel in creating seamless user experiences, optimizing performance, and delivering scalable solutions. Passionate about coding and innovation
                </p>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1  mt-3 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack Developer Trainee
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Agami Technologies
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2023- 3 Months
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                A highly motivated Trainee Full Stack Developer at Agami Technologies, skilled in both front-end and back-end development. Proficient in JavaScript, React, Node.js, and databases like MongoDB. Passionate about learning and implementing new technologies to build robust and user-friendly applications. Strong problem-solving abilities and a collaborative team player.
                </p>
              </div>
              
              
            </div>

          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  MCA, Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  GALGOTIAS UNIVERSITY
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                A Master of Computer Applications (MCA) graduate from Galgotias University, I have honed my technical and analytical skills through rigorous coursework and hands-on projects. With a strong foundation in software development, database management, and emerging technologies, I am equipped to deliver innovative solutions. My academic journey reflects a commitment to excellence and continuous learning.
                </p>
              </div>
              {/* design */}

              <div className=" flex flex-col gap-1 border-2 mt-3 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  BCA, Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  DR Bhim RAO AMBEDKAR UNIVERSITY
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                A Bachelor of Computer Applications (BCA) graduate with a strong foundation in programming, software development, and database management. Skilled in multiple programming languages, web technologies, and system analysis. Proven ability to work on both front-end and back-end projects, with a focus on creating efficient and user-friendly applications. Ready to contribute to innovative tech solutions.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
