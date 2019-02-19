import React from 'react';
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
        <p className="panel__body">
          Developer with a degree in computer science and 4 years commercial experience using web
          technologies. Conscientious, comitted and friendly.
        </p>
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
