import React from 'react';
import {
  FaEnvelope,
  FaGithub,
} from 'react-icons/fa';
import Layout from '../components/Layout';
import PageMetadata from '../components/PageMetadata';
import SkillList from '../components/SkillList';
import OccupationHistory from '../components/OccupationHistory';
import InterestList from '../components/InterestList';

export default () => (
  <Layout>
    <PageMetadata
      description="Find out about Christopher Wheatley's skills, experience and qualifications in software development."
    />
    <article>
      <div className="panel panel--pageHeader">
        <h1 className="panel__header">Christopher Wheatley</h1>
        <div className="panel__body">
          Developer with a degree in computer science and 4 years commercial experience using web
          technologies. Conscientious, comitted and friendly.
          <div className="panel__actions">
            <a
              className="button button--cta"
              href="about:blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="button__icon" />
              Send an Email
            </a>
            <a
              className="button button--transparent-light"
              href="about:blank"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="button__icon" />
              View Projects
            </a>
          </div>
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
