import React, { useState, useEffect } from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { dataabout, meta, worktimeline, skills } from '../../content_option';

export const About = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme'));
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTheme(mutation.target.getAttribute('data-theme'));
        }
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-1 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => (
                  <tr key={i}>
                    <th
                      style={{
                        color: theme === 'dark' ? 'white' : 'black',
                        backgroundColor: theme === 'dark' ? 'black' : 'white',
                      }}
                      scope="row"
                    >
                      {data.jobtitle}
                    </th>
                    <td
                      style={{
                        color: theme === 'dark' ? 'white' : 'black',
                        backgroundColor: theme === 'dark' ? 'black' : 'white',
                      }}
                    >
                      {data.where}
                    </td>
                    <td
                      style={{
                        color: theme === 'dark' ? 'white' : 'black',
                        backgroundColor: theme === 'dark' ? 'black' : 'white',
                      }}
                    >
                      {data.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7" className="grid-container">
            {skills.map((skill, i) => (
              <div key={i}>
                <Card className="skill-card">
                  <Card.Body>
                    <h3 className="card-title">{skill.name}</h3>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
