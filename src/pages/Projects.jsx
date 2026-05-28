import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Here are some of the projects I've built — production-grade full-stack
        applications spanning finance, project management, and collaborative
        tools. Most are open-source, so feel free to explore the codebase or
        check out the live demos.
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>

              <div className='mt-5 flex items-center gap-6 font-poppins'>
                <Link
                  to={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 font-semibold text-blue-600'
                >
                  Live Demo
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </Link>

                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1 font-semibold text-slate-600'
                >
                  GitHub
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-800' />

      <CTA />
    </section>
  );
};

export default Projects;