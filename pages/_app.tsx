import '../styles/globalStyle.tsx';
import type { AppProps } from 'next/app';
import Layout from '@components/Layout';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
