import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { achievements, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Ankit Kumar
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Second-year Computer Science student at Sathyabama Institute of
          Science and Technology, Chennai — CGPA 9.35. I'm a full-stack
          developer specializing in MERN and PERN stack applications, with
          production-grade projects in finance, project management, and
          collaborative tools. I've co-authored a research paper presented at
          an international conference, solved 500+ DSA problems competitively,
          and led technical workshops for 150+ students as an IEEE WIE Executive
          Committee Member. Currently seeking an SDE internship for Summer 2026.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Achievements & Certifications</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            A timeline of my key milestones — research publications, awards,
            leadership, certifications, and competitive programming achievements.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {achievements.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                date={item.date}
                iconStyle={{
                  background: item.iconBg,
                  border: "1px solid #333",
                }}
                icon={
                  <div className='flex justify-center items-center w-full h-full text-lg'>
                    🏆
                  </div>
                }
                contentStyle={{
                  borderBottom: "2px solid #333",
                  borderStyle: "solid",
                  borderBottomColor: "#444",
                  boxShadow: "none",
                  background: "#111",
                  color: "#f5f5f5",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #333",
                }}
              >
                <div>
                  <h3 className='text-white text-xl font-semibold'>
                    {item.title}
                  </h3>
                  <p
                    className='text-gray-400 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {item.organization}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className='text-gray-400 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-800' />

      <CTA />
    </section>
  );
};

export default About;