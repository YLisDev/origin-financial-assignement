import { theme } from '@styles/globalStyle';
import styled, { css } from 'styled-components';

export const Conatiner = styled.div<{ theme: typeof theme }>`
    padding: 35px 40px;
    margin: 48px 0;
    width: ${({ theme }) => theme.breakPoints.mobile};
    position: relative;

    box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.background.white};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        padding: 31px 24px;
        width: 100%;
    }
`;

export const EncouragingCaption = styled.div`
    position: absolute;
    top: -48px;
    left: 0;
    height: 24px;
    width: 100%;

    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.accent.dark};
    font-family: ${({ theme }) => theme.fonts.other};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.mediumSmall};

    }
`;

export const Header = styled.header<{ theme: typeof theme }>`
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        h2 {
            font-size: ${({ theme }) => theme.fontSizes.mediumLarge};
        }
    }
`;

export const HeaderIconWrapper = styled.div`
    width: 64px;
    height: 64px;
`;

export const HeaderCaption = styled.span<{
    theme: typeof theme;
    centredText?: boolean;
}>`
    display: block;

    text-align: ${({ centredText }) => (centredText ? 'center' : 'left')};
    font-family: ${({ theme }) => theme.fonts.other};
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    color: ${({ theme }) => theme.colors.text.caption};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
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
    min-height: 56px;

    display: flex;
    flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
    justify-content: space-between;
    align-items: center;

    border-radius: ${({ increaseBorderRadius = false }) =>
        increaseBorderRadius ? '8px' : '4px'};
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
        & > div:first-child {
            margin-bottom: 16px;

            & > div {
                margin-bottom: 0px;
            }
        }
        & > div:is(:last-child, :first-child) {
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

export const DollarSignContainer = styled.div<{ theme: typeof theme }>`
    padding-top: 3px;

    & svg {
        width: 24px;
        height: 24px;

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
            width: 20px;
            height: 20px;
        }
    }
`;

export const AmountInput = styled.input<{ theme: typeof theme }>`
    width: 100%;
    height: 56px;

    border: none;
    outline: none;

    font-family: ${({ theme }) => theme.fonts.headers};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 28px;
    color: ${({ theme }) => theme.colors.text.input};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    }
`;

export const MonthName = styled.h3<{ theme: typeof theme }>`
    margin: 0;

    font-family: ${({ theme }) => theme.fonts.header};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    font-family: ${({ theme }) => theme.fonts.headers};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`;

export const DateInputButton = styled.button<{ theme: typeof theme }>`
    display: block;
    padding: 0;

    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:disabled,
    &[disabled] {
        opacity: 0.5;
    }
`;

export const ResultsContainer = styled.div<{ theme: typeof theme }>`
    min-height: 80px;
    width: 100%;

    padding: 24px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        padding: 24px 27px;
    }
`;

export const MonthlyAmmountCaption = styled.span<{ theme: typeof theme }>`
    display: block;

    font-family: ${({ theme }) => theme.fonts.other};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text.default};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    }
`;

export const MonthlyAmmountValue = styled.span<{ theme: typeof theme }>`
    display: block;

    font-family: ${({ theme }) => theme.fonts.headers};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
    line-height: 24px;
    color: ${({ theme }) => theme.colors.accent.light};

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.mediumLarge};
    }
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
    color: ${({ theme }) => theme.colors.text.default};
`;

export const Button = styled.button<{ theme: typeof theme }>`
    width: 320px;
    height: 56px;

    margin: 32px auto 0;

    border: none;
    border-radius: 32px;
    display: block;

    outline: none;
    background-color: ${({ theme }) => theme.colors.accent.dark};

    font-family: ${({ theme }) => theme.fonts.other};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
    color: #fff;

    cursor: pointer;
`;
