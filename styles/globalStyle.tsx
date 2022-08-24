import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  html, body, #__next {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export const theme = {
    colors: {
        background: { gray: '#fafafa', white: '#fff' },
        accent: { dark: '#1B31A8', light: '#0079FF' },
    },
    fonts: {
        headers: ['sans-serif', 'Rubik'],
        other: ['sans-serif', 'Work Sans'],
    },
    fontSizes: {
        extraSmall: '12px',
        small: '14px',
        mediumSmall: '16px',
        medium: '18px',
        mediumLarge: '20px',
        large: '24px',
    },
    heights: {
        header: { desktop: '80px', mobile: '56px' },
    },
    breakPoints: {
        mobile: '560px',
    },
};

export default GlobalStyle;
