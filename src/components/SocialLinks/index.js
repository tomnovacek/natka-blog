import React from 'react';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Github } from 'styled-icons/boxicons-logos/Github';

import * as S from './styled';
import { Facebook, Instagram } from 'styled-icons/boxicons-logos';

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://www.facebook.com/natalie.novackova.165"
          title="facebook"
          target="_blank"
        >
          <Facebook />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://www.instagram.com/_natalia_noov/"
          title="Instagram"
          target="_blank"
        >
          <Instagram />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  );
};

export default SocialLinks;
