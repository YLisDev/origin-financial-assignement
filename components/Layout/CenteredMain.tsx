import { theme } from '@styles/globalStyle';
import styled from 'styled-components';

interface CenteredMainProps {
    theme: typeof theme;
}

export default styled.main<CenteredMainProps>`
    margin-top: ${({ theme }) => theme.heights.header.desktop};
    min-height: calc(100vh - ${({ theme }) => theme.heights.header.desktop});

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.background.gray};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        min-height: calc(100vh - ${({ theme }) => theme.heights.header.mobile});
    }
`;
