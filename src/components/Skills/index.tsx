import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="title">EXPERIENCE and SKILLS</h2>
      {/* <p className="content-670">
        I've worked as a front-end developer and systems analyst for nine years.
        I use a variety of technologies, including Angular, React, TypeScript,
        and NodeJS, depending on the business need. I constantly stay up to
        speed with the technology I use, as well as having a passion for
        additional programming languages.
      </p> */}

      <ul className="skills-history block-right">
        <li>
          <span className="date">2013</span>
          <p>
            <div>
              <strong>Full-stack Developer</strong>
            </div>
            <div className="company">Marknet.</div>
            <strong>2013 - 2016</strong> As a Full-stack Developer Jr., I was a
            member of the development team. The major actions were creating a
            customised website and e-commerce based on a layout suggested by the
            Designers team.
          </p>
        </li>

        <li>
          <span className="date">2016</span>
          <p>
            <div>
              <strong>Frontend Developer</strong>
            </div>
            <div className="company">Sabium Sistemas.</div>
            <strong>2016 - 2016</strong> As a Frontend Developer, My
            responsabilite was Analyze and develop solutions for internal
            management system. Propose innovative solutions for new projects.
            Design and develop screens using UX / UI concepts. Study, apply and
            implement B.I for metrics management, report on detailed results.
          </p>
        </li>

        <li>
          <span className="date">2016</span>
          <p>
            <div>
              <strong>Frontend Developer</strong>
            </div>
            <div className="company">Morena Rosa Group.</div>
            <strong>2016 - 2018</strong> The brands Morena Rosa, Maria
            Valentina, Zinco, Leboh, and Iodice are all part of the Brazilian
            high fashion group known as Grupo Morena Rosa. I got the chance to
            work as a Frontend Developer at this time, planning and creating
            websites, e-commerce, and internal control systems for resellers. I
            also remodeled legacy systems for new architectures and technologies
            to ensure the best user experience.
          </p>
        </li>

        <li>
          <span className="date">2018</span>
          <p>
            <div>
              <strong>Frontend Engineer</strong>
            </div>
            <div className="company">Ambev Tech.</div>
            <strong>2018 - 2019</strong> Ambev Tech is a big tech subsidiary of
            one of the largest beverage companies in the world, Ambev(AB InBev).
            I worked as a Frontend Engineer in a dynamic environment, planning
            and creating software and components for MES (Manufacturing
            Execution Systems) and MOM (Manufacturing operations management). I
            also created Customized and reusable web components following
            business rules, layout, and design system and, in addition, I always
            to solve problems in the simplest possible way.
          </p>
        </li>

        <li>
          <span className="date">2019</span>
          <p>
            <div>
              <strong>Frontend Engineer</strong>
            </div>
            <div className="company">GFT Group.</div>
            <strong>2019 - 2022</strong> GFT Technologies SE engages in
            technological consulting. During this time, I worked as a Frontend
            Engineer in fast-paced for two firms, coding unique solutions on
            distinct commercial fronts, one specializing in payment methods
            (Cielo) and the other in clinical analysis and medical consultations
            (DASA). The main activities were to do configuration of
            micro-frontend, architecture using Webpack and Module Federation,
            create customized and reusable web components following business
            rules, layout, and design system and refactor of legacy systems to
            new technologies.
          </p>
        </li>
      </ul>

      <ul className="skills-progress">
        <li>
          <span className="name">JAVASCRIPT</span>
          <div className="skill">
            <div className="skill-fill" data-fill="85%"></div>
          </div>
        </li>

        <li>
          <span className="name">TYPESCRIPT</span>
          <div className="skill">
            <div className="skill-fill" data-fill="75%"></div>
          </div>
        </li>

        <li>
          <span className="name">REACT</span>
          <div className="skill">
            <div className="skill-fill" data-fill="80%"></div>
          </div>
        </li>

        <li>
          <span className="name">ANGULAR</span>
          <div className="skill">
            <div className="skill-fill" data-fill="75%"></div>
          </div>
        </li>

        <li>
          <span className="name">NODE</span>
          <div className="skill">
            <div className="skill-fill" data-fill="68%"></div>
          </div>
        </li>

        <li>
          <span className="name">RXJS</span>
          <div className="skill">
            <div className="skill-fill" data-fill="55%"></div>
          </div>
        </li>

        <li>
          <span className="name">JEST</span>
          <div className="skill">
            <div className="skill-fill" data-fill="78%"></div>
          </div>
        </li>

        <li>
          <span className="name">GITHUB</span>
          <div className="skill">
            <div className="skill-fill" data-fill="85%"></div>
          </div>
        </li>

        <li>
          <span className="name">AWS</span>
          <div className="skill">
            <div className="skill-fill" data-fill="60%"></div>
          </div>
        </li>

        <li>
          <span className="name">AZURE</span>
          <div className="skill">
            <div className="skill-fill" data-fill="65%"></div>
          </div>
        </li>

        <li>
          <span className="name">MICRO-FRONTEND</span>
          <div className="skill">
            <div className="skill-fill" data-fill="75%"></div>
          </div>
        </li>

        <li>
          <span className="name">WEBPACK</span>
          <div className="skill">
            <div className="skill-fill" data-fill="70%"></div>
          </div>
        </li>
        <li>
          <span className="name">STYLED-COMPONETS</span>
          <div className="skill">
            <div className="skill-fill" data-fill="75%"></div>
          </div>
        </li>
        <li>
          <span className="name">UI/UX</span>
          <div className="skill">
            <div className="skill-fill" data-fill="68%"></div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
