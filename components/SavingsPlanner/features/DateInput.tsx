import { theme } from '@styles/globalStyle';
import moment from 'moment';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import {
    BorderContainer,
    DateInputButton,
    HeaderCaption,
    MonthName,
} from '../UI';
import { getInitialQuery } from '../utils';
import { ReactComponent as Next } from '@img/next-pointer.svg';
import { ReactComponent as Prev } from '@img/prev-pointer.svg';

const DateInput = () => {
    const [currentDate, setCurrentDate] = useState(moment());
    const router = useRouter();

    const NEXT_MONTH = moment(currentDate).add(1, 'month');
    const PREV_MONTH = moment(currentDate).subtract(1, 'month');

    useEffect(() => {
        const initialDate = getInitialQuery('dueDate', router);

        if (initialDate && currentDate.diff(moment(initialDate), 'days') <= 0) {
            setCurrentDate(moment(initialDate));
        }
    }, []);

    const handleClick = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrentDate(NEXT_MONTH);

            router.query.dueDate = NEXT_MONTH.format('YYYY-MM');
            router.push(router, undefined, { shallow: true });
        } else {
            if (currentDate.diff(moment(), 'days') === 0) return;
            setCurrentDate(PREV_MONTH);

            router.query.dueDate = PREV_MONTH.format('YYYY-MM');
            router.push(router, undefined, { shallow: true });
        }
    };

    return (
        <BorderContainer id="date" horizontalPadding={20}>
            <DateInputButton
                disabled={currentDate.diff(moment(), 'day') <= 0}
                onClick={() => {
                    handleClick('prev');
                }}
            >
                <Prev />
            </DateInputButton>

            <div>
                <MonthName>{moment(currentDate).format('MMMM')}</MonthName>
                <HeaderCaption centredText>
                    {moment(currentDate).format('YYYY')}
                </HeaderCaption>
            </div>

            <DateInputButton
                onClick={() => {
                    handleClick('next');
                }}
            >
                <Next />
            </DateInputButton>
        </BorderContainer>
    );
};

export default DateInput;
