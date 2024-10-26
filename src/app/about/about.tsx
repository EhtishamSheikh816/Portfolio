import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="bg-gray-800 px-10">
      <div>
        <h1 className="text-gray-950 text-4xl font-extrabold">About Me</h1>
      </div>
      <div>
        <h2 className="text-navColor text-2xl font-semibold">
          Get to know me!
        </h2>
      </div>
      <div>
        <p className="text-white pb-3">
          I'm a passionate Front-End Developer with expertise in building
          dynamic and responsive web applications. I have a strong foundation in
          both front-end and back-end technologies, enabling me to create
          seamless user experiences and robust server-side logic.
        </p>
      </div>
      <div>
        <p className="text-white">
          I am a passionate Front-End Developer specializing in HTML, CSS,
          Typescript, Next.js, Tailwind.css and Figma. With a solid foundation
          in front-end technologies, I create modern web applications that are
          not only functional but also user-friendly.
        </p>
        <p className="text-white">
          I am dedicated to delivering high-quality projects on time, always
          focused on meeting the unique needs of my clients. My goal is to
          transform ideas into reality while providing an exceptional user
          experience.
        </p>
      </div>
      <div>
        <Image src="/image/i.jpg" alt="me" width={200} height={200} />
      </div>
    </div>
  );
};
export default About;
