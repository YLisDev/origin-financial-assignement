import styled from 'styled-components';
import AmountInput from './features/AmountInput';
import Conclusion from './features/Conclusion';
import ConfirmButton from './features/ConfirmButton';
import DateInput from './features/DateInput';
import MonthlyAmmount from './features/MonthlyAmmount';
import { ReactComponent as House } from '@img/house.svg';
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

const SavingsPlanner = () => {
    return (
        <Conatiner>
            <EncouragingCaption>
                Let&apos;s plan your <b>saving goal</b>
            </EncouragingCaption>

            <Header>
                <HeaderIconWrapper>
                    <House />
                </HeaderIconWrapper>
                <div style={{ paddingLeft: '16px' }}>
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
