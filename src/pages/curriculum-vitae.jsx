import React from 'react';
import Layout from '../components/Layout';
import PageMetadata from '../components/PageMetadata';

export default () => (
  <Layout>
    <PageMetadata
      title="Curriculum Vitae"
      description="Find out about Christopher Wheatley's skills, experience and qualifications in software development."
    />
    <main>
      <article>
        <section>
          <h1>Curriculum Vitae</h1>
          <p>
            Developer with a degree in computer science and 4 years commercial experience using
            web technologies. Conscientious, comitted and friendly.
          </p>
          <section>
            <h2>Skills</h2>
          </section>
          <section>
            <h2>Employment</h2>
          </section>
          <section>
            <h2>Education</h2>
          </section>
          <section>
            <h2>Interests</h2>
          </section>
        </section>
      </article>
    </main>
  </Layout>
);
