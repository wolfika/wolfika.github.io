import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';
import { FaLinkedinIn, FaTwitter, FaDev, FaGithub } from 'react-icons/fa';

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            gitHubUrl
            twitterUrl
            linkedInUrl
            devUrl
          }
        }
      }
    }
  `);

  const { social } = data.site.siteMetadata;
  return (
    <ul
      style={{
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
      }}
    >
      <li
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <a
          href={social.gitHubUrl}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: rhythm(0.8),
            height: '40px',
            justifyContent: 'center',
            textAlign: 'center',
            width: '40px',
          }}
        >
          <FaGithub />
        </a>
      </li>
      <li
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <a
          href={social.linkedInUrl}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: rhythm(0.8),
            height: '40px',
            justifyContent: 'center',
            textAlign: 'center',
            width: '40px',
          }}
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <a
          href={social.twitterUrl}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: rhythm(0.8),
            height: '40px',
            justifyContent: 'center',
            textAlign: 'center',
            width: '40px',
          }}
        >
          <FaTwitter />
        </a>
      </li>
      <li
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <a
          href={social.devUrl}
          target="_blank"
          rel="noreferrer noopener"
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: rhythm(0.8),
            height: '40px',
            justifyContent: 'center',
            textAlign: 'center',
            width: '40px',
          }}
        >
          <FaDev />
        </a>
      </li>
    </ul>
  );
};

export default Social;
