import GlobalStyle from '@styles/globalStyle';
import { FC, ReactNode } from 'react';
import CenteredMain from './CenteredMain';
import Header from './Header';

const Layout: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header>Logo</Header>
            <CenteredMain>{children}</CenteredMain>
        </>
    );
};

export default Layout;
