import { theme } from '@styles/globalStyle';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
    BorderContainer,
    DateInputButton,
    HeaderCaption,
    MonthName,
} from '../UI';
import { getInitialQuery } from '../utils';

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

    console.log();

    return (
        <BorderContainer horizontalPadding={20}>
            <DateInputButton
                disabled={currentDate.diff(moment(), 'day') <= 0}
                onClick={() => {
                    handleClick('prev');
                }}
            >
                <i
                    style={{
                        fontSize: '24px',
                        color: '#8A9CA9',
                    }}
                    className="fas"
                >
                    &#xf104;
                </i>
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
                <i
                    style={{
                        fontSize: '24px',
                        color: '#8A9CA9',
                    }}
                    className="fas"
                >
                    &#xf105;
                </i>
            </DateInputButton>
        </BorderContainer>
    );
};

export default DateInput;
