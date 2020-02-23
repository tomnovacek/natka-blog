import React from 'react';
import useTranslations from '../useTranslations';
import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Footer = () => {
  const {
    aboutProject,
    seeMorePWA,
    maintainedBy,
    contributeMessage,
  } = useTranslations();

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <SocialLinks />
        <p>
          {aboutProject}{' '}
          <a
            href="https://www.instagram.com/_natalia_noov/"
            target="_blank"
          >
            Instagram
          </a>
          .
        </p>
        <p>
          {maintainedBy}{' '}
          <a
            href="mailto:nataluska.novackova@gmail.com"
          >
            @naty
          </a>
          . {contributeMessage}{' '}
          <a
            href="/Admin"
            target="_blank"
          >
            Blog
          </a>
          .
        </p>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
