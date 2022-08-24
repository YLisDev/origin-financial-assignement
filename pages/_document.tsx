import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface DocumentProps {
    locale: string;
    styleTags: string;
}

export default class MyDocument extends NextDocument<DocumentProps> {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await NextDocument.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html>
                <Head>
                    {this.props.styleTags}
                    <link
                        rel="preload"
                        href="/fonts/Theinhardt-Regular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin={'*'}
                    />
                    <link
                        rel="preload"
                        href="/fonts/Theinhardt-Medium.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin={'*'}
                    />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                    <meta name="theme-color" content="#ffffff" />
                    <script
                        defer
                        data-domain="bezerocarbon.com"
                        src="https://plausible.io/js/plausible.js"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
