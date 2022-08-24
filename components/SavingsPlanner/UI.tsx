import { theme } from '@styles/globalStyle';
import styled, { css } from 'styled-components';

export const Conatiner = styled.div<{ theme: typeof theme }>`
    padding: 35px 40px;
    width: ${({ theme }) => theme.breakPoints.mobile};
    position: relative;

    box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.background.white};

    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        padding: 31px 24px;
        width: 100%;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const HeaderIconWrapper = styled.div`
    width: 64px;
    height: 64px;
`;

export const HeaderCaption = styled.span<{ theme: typeof theme }>`
    font-family: ${({ theme }) => theme.fonts.other};
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text.caption};
`;

export const BorderContainer = styled.div<{
    flexDirection?: 'row' | 'column';
    horizontalPadding?: number;
    verticalPadding?: number;
    increaseBorderRadius?: boolean;
}>`
    margin-bottom: 24px;
    padding: ${({ verticalPadding = 0 }) => verticalPadding}px
        ${({ horizontalPadding = 0 }) => horizontalPadding}px;

    display: flex;
    flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
    justify-content: center;
    align-items: center;

    border-radius: ${({ increaseBorderRadius = false }) => (increaseBorderRadius ? '8px' : '4px')};
    border: 1px solid #e9eef2;

    overflow: hidden;
`;

export const InputsContainer = styled.div<{ theme: typeof theme }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    & > div:first-child {
        width: 272px;
        margin-right: 16px;
    }

    & > div:last-child {
        width: 192px;
    }

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        & > div {
            width: 100%;
            margin-right: 0;
        }
    }
`;

export const InputLabel = styled.label<{ theme: typeof theme }>`
    font-family: ${({ theme }) => theme.fonts.other};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.extraSmall};
    line-height: 21px;
    color: ${({ theme }) => theme.colors.text.header};
`;

export const AmountInput = styled.input<{ theme: typeof theme }>`
    width: 100%;
    height: 56px;

    border: none;
    outline: none;

    font-family: ${({ theme }) => theme.fonts.header};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 28px;
    color: ${({ theme }) => theme.colors.text.input};
`;

export const ResultsContainer = styled.div<{ theme: typeof theme }>`
    min-height: 80px;
    width: 100%;

    padding: 24px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MonthlyAmmountCaption = styled.span<{ theme: typeof theme }>`
    display: block;

    font-family: ${({ theme }) => theme.fonts.other};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text.default};
`;

export const MonthlyAmmountValue = styled.span<{ theme: typeof theme }>`
    display: block;

    font-family: ${({ theme }) => theme.fonts.headers};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 24px;
    color: ${({ theme }) => theme.colors.accent.light};
`;

export const Conclusion = styled.p<{ theme: typeof theme }>`
    min-height: 80px;
    width: 100%;

    padding: 24px 30px;
    display: block;
    margin: 0;

    background-color: ${({ theme }) => theme.colors.background.gray};

    font-family: ${({ theme }) => theme.fonts.other};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.extraSmall};
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text.default};
`;

export const Button = styled.button<{ theme: typeof theme }>`
    width: 320px;
    height: 56px;

    margin: 8px auto 0;

    border: none;
    border-radius: 32px;
    display: block;

    outline: none;
    background-color: ${({ theme }) => theme.colors.accent.dark};

    font-family: ${({ theme }) => theme.fonts.other};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    color: #fff;
`;
