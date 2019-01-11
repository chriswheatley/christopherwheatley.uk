import React from 'react';
import Layout from '../components/Layout';
import PageMetadata from '../components/PageMetadata';
import SkillList from '../components/SkillList';
import EmploymentHistory from '../components/EmploymentHistory';
import EducationHistory from '../components/EducationHistory';
import InterestList from '../components/InterestList';
import '../styles/panel.scss';

export default () => (
  <Layout>
    <PageMetadata
      title="Curriculum Vitae"
      description="Find out about Christopher Wheatley's skills, experience and qualifications in software development."
    />
    <article>
      <div className="panel panel--pageHeader">
        <h1 className="panel__header">Curriculum Vitae</h1>
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
          <EmploymentHistory />
        </div>
      </section>
      <section className="panel">
        <h2 className="panel__header">Education</h2>
        <div className="panel__body">
          <EducationHistory />
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
