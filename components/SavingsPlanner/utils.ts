import moment from 'moment';
import { NextRouter } from 'next/router';

export const filterInputData = (data: string) => {
    return data.replace(/[^0-9,.]/g, '');
};

export const formatInputData = (value: string) => {
    const filteredValue = filterInputData(value);
    if (!filteredValue.length) return filteredValue;

    if (filteredValue[0] === '0') return '';

    let [dollars, cents] = filteredValue.split('.');

    if (cents && cents.length > 2) cents = cents.substring(0, 2);
    console.log('cents', cents, filteredValue);

    if (dollars.length > 3 && filteredValue[filteredValue.length - 1] !== '.') {
        const filteredDolars = dollars
            .replace(/[^0-9]/g, '')
            .split('')
            .reverse()
            .join('')
            .match(/\d{1,3}/g)
            .join(',')
            .split('')
            .reverse()
            .join('');
        return `${filteredDolars}${cents ? `.${cents}` : ''}`;
    }

    return `${dollars}${cents ? `.${cents}` : ''}`;
};

export const getInitialQuery = (
    queryKey: string,
    router: NextRouter,
): string => {
    const initialQuery =
        router.query[queryKey] ||
        router.asPath.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`));

    let result = null;
    if (initialQuery && initialQuery[0]) {
        initialQuery[0].split('&').forEach((query) => {
            const [key, value] = query.split('=');
            if (key === queryKey || key === '?' + queryKey) {
                result = value;
            }
        });
    }

    return result;
};

export const calculateMonthlyAmmount = (
    ammount: string,
    dueDate: moment.Moment,
) => {
    const unformattedAmmount =
        parseFloat(ammount) / (dueDate.diff(moment(), 'month') + 1);

    console.log(unformattedAmmount.toString());

    return formatInputData(unformattedAmmount.toString());
};
