import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MonthlyAmmountValue } from '../UI';
import {
    getInitialQuery,
    formatInputData,
    calculateMonthlyAmmount,
} from '../utils';

const MonthlyAmmount = () => {
    const router = useRouter();
    const [monthlyAmmount, setMonthlyAmmount] = useState('0');

    const amount = router.query.amount as string;
    const dueDate = router.query.dueDate;

    useEffect(() => {
        const initialDate = getInitialQuery('dueDate', router);
        const initialAmmount = getInitialQuery('amount', router);

        if (initialAmmount && initialDate) {
            const ammount = initialAmmount.split('%2C').join('') as string;
            const date = moment(initialDate);

            const monthlyAmmount = calculateMonthlyAmmount(ammount, date);
            setMonthlyAmmount(monthlyAmmount);
        }
    }, []);

    useEffect(() => {
        if (amount && dueDate) {
            const ammount = amount.split(',').join('');
            const date = moment(dueDate);

            const monthlyAmmount = calculateMonthlyAmmount(ammount, date);
	    
            setMonthlyAmmount(monthlyAmmount);
        }
    }, [amount, dueDate]);
    return <MonthlyAmmountValue>${monthlyAmmount}</MonthlyAmmountValue>;
};

export default MonthlyAmmount;
