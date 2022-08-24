import styled from 'styled-components';
import {
    AmountInput,
    BorderContainer,
    Button,
    Conatiner,
    Conclusion,
    Header,
    HeaderCaption,
    HeaderIconWrapper,
    InputLabel,
    InputsContainer,
    MonthlyAmmountCaption,
    MonthlyAmmountValue,
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
                        <AmountInput id="ammount" type="text" />
                    </BorderContainer>
                </div>
                <div>
                    <InputLabel htmlFor="date">Reach goal by</InputLabel>

                    <BorderContainer>
                        <AmountInput id="date" type="date" />
                    </BorderContainer>
                </div>
            </InputsContainer>

            <BorderContainer increaseBorderRadius flexDirection="column">
                <ResultsContainer>
                    <MonthlyAmmountCaption>Monthly amount</MonthlyAmmountCaption>
                    <MonthlyAmmountValue>$500.83</MonthlyAmmountValue>
                </ResultsContainer>
                <Conclusion>Conclusion xdc fs sddsdv sdv sdvsdvsdvsdvvsd vsdvsdvsdvsdv</Conclusion>
            </BorderContainer>

            <Button>Confirm</Button>
        </Conatiner>
    );
};

export default SavingsPlanner;
