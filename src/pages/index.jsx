import React from 'react';
import {
  FaComments,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
} from 'react-icons/fa';
import Layout from '../components/Layout';
import PageMetadata from '../components/PageMetadata';
import SkillList from '../components/SkillList';
import OccupationHistory from '../components/OccupationHistory';
import InterestList from '../components/InterestList';
import ProtectedEmailLink from '../components/ProtectedEmailLink';

export default () => (
  <Layout>
    <PageMetadata
      description="Find out about Christopher Wheatley's skills, experience and qualifications in software development."
    />
    <article>
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Christopher Wheatley</h1>
        </div>
        <div className="hero__content">
          <ul className="hero__list">
            <li className="hero__list-item">
              <FaLaptopCode className="hero__list-icon" />
              <span>Software Developer with over 4 years commercial experience.</span>
            </li>
            <li className="hero__list-item">
              <FaGraduationCap className="hero__list-icon" />
              <span>Computer Science degree.</span>
            </li>
            <li className="hero__list-item">
              <FaComments className="hero__list-icon" />
              <span>Conscientious, comitted and friendly.</span>
            </li>
          </ul>
        </div>
        <div className="hero__content">
          <ProtectedEmailLink className="hero--btn-radius" base64Email="Y2hyaXNAY2hyaXN0b3BoZXJ3aGVhdGxleS51aw==" />
          <a
            className="button button--transparent-light hero--btn-radius"
            href="https://github.com/chriswheatley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="button__icon" />
            View Projects
          </a>
        </div>
      </div>
      <section className="panel">
        <h2 className="panel__header">Skills</h2>
        <div className="panel__body">
          <SkillList />
        </div>
      </section>
      <section className="panel">
        <h2 className="panel__header">Employment</h2>
        <div className="panel__body">
          <OccupationHistory category="jobs" />
        </div>
      </section>
      <section className="panel">
        <h2 className="panel__header">Education</h2>
        <div className="panel__body">
          <OccupationHistory category="education" />
        </div>
      </section>
      <section className="panel">
        <h2 className="panel__header">Interests</h2>
        <div className="panel__body">
          <InterestList />
        </div>
      </section>
    </article>
  </Layout>
);
