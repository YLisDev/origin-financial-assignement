import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        background: { gray: '#f4f8fa', white: '#fff' },
        accent: { dark: '#1B31A8', light: '#0079FF' },
        text: { header: '#1E2A32', default: '#1C1E1F', caption: '#708797', input: '#4D6475' },
    },
    fonts: {
        headers: 'Rubik, sans-serif',
        other: '"Work Sans", sans-serif',
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

  h2 {
    font-family: ${theme.fonts.headers};
    font-size: ${theme.fontSizes.large};

    margin: 0 0 4px;
  }
`;
export default GlobalStyle;
