import React from 'react';
import {
  FaComments,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaEye,
} from 'react-icons/fa';
import Layout from '../components/Layout';
import PageMetadata from '../components/PageMetadata';
import SkillList from '../components/SkillList';
import OccupationHistory from '../components/OccupationHistory';
import InterestList from '../components/InterestList';
import ProtectedEmailLink from '../components/ProtectedEmailLink';

const IndexPage = () => (
  <Layout>
    <PageMetadata
      description="Christopher Wheatley is a software developer in the united kingdom with 4 years' commercial experience in web development."
    />
    <article>
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Christopher Wheatley</h1>
          <div className="hero__list-item">
            <span>Software Developer, United Kingdom</span>
          </div>
        </div>
        <div className="hero__content">
          <ul className="hero__list">
            <li className="hero__list-item">
              <FaGraduationCap className="hero__list-icon" />
              <span>Computer Science degree.</span>
            </li>
            <li className="hero__list-item">
              <FaLaptopCode className="hero__list-icon" />
              <span>4 years&apos; commercial experience.</span>
            </li>
            <li className="hero__list-item">
              <FaComments className="hero__list-icon" />
              <span>Committed team worker.</span>
            </li>
            <li className="hero__list-item">
              <FaEye className="hero__list-icon" />
              <span>Eye for pixel-perfect detail.</span>
            </li>
          </ul>
        </div>
        <div className="hero__content">
          Looking for a full-time position in front-end or back-end development at a
          company with strong ethics and a progressive environment.
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
        <h2 className="panel__header">Skills & Achievements</h2>
        <div className="panel__body">
          <SkillList />
        </div>
      </section>
      <section className="panel">
        <h2 className="panel__header">Career History</h2>
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

export default IndexPage;
