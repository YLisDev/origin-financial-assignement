import styled from 'styled-components';
import AmountInput from './features/AmountInput';
import Conclusion from './features/Conclusion';
import ConfirmButton from './features/ConfirmButton';
import DateInput from './features/DateInput';
import MonthlyAmmount from './features/MonthlyAmmount';
import {
    BorderContainer,
    Conatiner,
    EncouragingCaption,
    Header,
    HeaderCaption,
    HeaderIconWrapper,
    InputLabel,
    InputsContainer,
    MonthlyAmmountCaption,
    ResultsContainer,
} from './UI';

const H2 = styled.h2`
    color: green;

    margin-bottom: 5px;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 120%;
`;

const SavingsPlanner = () => {
    return (
        <Conatiner>
            <EncouragingCaption>
                Let&apos;s plan your <b>saving goal</b>
            </EncouragingCaption>

            <Header>
                <HeaderIconWrapper></HeaderIconWrapper>
                <div>
                    <h2>Buy a house</h2>
                    <HeaderCaption>Saving goal</HeaderCaption>
                </div>
            </Header>

            <InputsContainer>
                <div>
                    <InputLabel htmlFor="ammount">Total amount</InputLabel>
                    <BorderContainer horizontalPadding={17}>
                        <div>dsds</div>
                        <AmountInput />
                    </BorderContainer>
                </div>
                <div>
                    <InputLabel htmlFor="date">Reach goal by</InputLabel>

                    <DateInput />
                </div>
            </InputsContainer>

            <BorderContainer increaseBorderRadius flexDirection="column">
                <ResultsContainer>
                    <MonthlyAmmountCaption>
                        Monthly amount
                    </MonthlyAmmountCaption>
                    <MonthlyAmmount />
                </ResultsContainer>
                <Conclusion />
            </BorderContainer>

            <ConfirmButton />
        </Conatiner>
    );
};

export default SavingsPlanner;
