import styled from 'styled-components';

export default styled.header`
    width: 100%;
    height: ${({ theme }) => theme.heights.header.desktop};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 56px;
    position: fixed;
    top: 0;

    background: ${({ theme }) => theme.colors.background.white};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        padding: 16px;
        height: ${({ theme }) => theme.heights.header.mobile};
    }
`;
