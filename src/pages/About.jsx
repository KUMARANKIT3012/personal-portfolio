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
  Third-year Computer Science student at Sathyabama Institute of
  Science and Technology, Chennai, with a CGPA of 9.47. Awarded the
  Chancellor's Scholarship Merit Certificate 2026 for securing 11th Rank
  among 1,700+ students. I'm a full-stack developer specializing in MERN
  and PERN stack applications, with production-grade projects in finance,
  project management, and collaborative tools. I've co-authored a research
  paper presented at an international conference, solved 700+ DSA
  problems, and led technical workshops for 150+ students as a Former IEEE
  WIE Executive Committee Member. Currently seeking Software Development
  Engineer internship opportunities where I can contribute to impactful
  products while continuing to grow as an engineer.
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

      <div className='py-10'>
        <h3 className='subhead-text'>Currently Exploring</h3>

        <div className='mt-5 grid md:grid-cols-2 gap-4'>
          <div className='p-4 rounded-lg border border-slate-200 bg-white'>
            <h4 className='font-semibold'>Advanced System Design</h4>
            <p className='text-slate-500 text-sm mt-1'>
              Learning scalable architectures, distributed systems, and backend
              design patterns.
            </p>
          </div>

          <div className='p-4 rounded-lg border border-slate-200 bg-white'>
            <h4 className='font-semibold'>Generative AI & LLM Integrations</h4>
            <p className='text-slate-500 text-sm mt-1'>
              Building AI-powered applications using modern LLM APIs and agent
              workflows.
            </p>
          </div>

          <div className='p-4 rounded-lg border border-slate-200 bg-white'>
            <h4 className='font-semibold'>Next.js Full-Stack Architecture</h4>
            <p className='text-slate-500 text-sm mt-1'>
              Exploring advanced patterns for authentication, databases,
              caching, and deployment.
            </p>
          </div>

          <div className='p-4 rounded-lg border border-slate-200 bg-white'>
            <h4 className='font-semibold'>Competitive Programming</h4>
            <p className='text-slate-500 text-sm mt-1'>
              Strengthening problem-solving skills through LeetCode and
              Codeforces contests.
            </p>
          </div>
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Achievements & Certifications</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            A timeline of my key milestones — research publications, awards,
            leadership, certifications, and competitive programming
            achievements.
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