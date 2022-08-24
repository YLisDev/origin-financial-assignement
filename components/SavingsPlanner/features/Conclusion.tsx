import moment from 'moment';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Conclusion as UI } from '../UI';
import { calculateMonthlyAmmount, getInitialQuery } from '../utils';

const Conclusion = () => {
    const router = useRouter();
    const [amount, setAmount] = useState('');
    const [dueDate, setDueDate] = useState(moment());
    const depositsCount = dueDate.diff(moment(), 'month') + 1;

    const amountQuery = router.query.amount as string;
    const dueDateQuery = router.query.dueDate;

    useEffect(() => {
        const initialDate = getInitialQuery('dueDate', router);
        const initialAmmount = getInitialQuery('amount', router);

        if (initialAmmount && initialDate) {
            const ammount = initialAmmount.split('%2C').join('') as string;
            const date = moment(initialDate);

            if (amount) setAmount(ammount);
            if (date) setDueDate(date);
        }
    }, []);

    useEffect(() => {
        setAmount(amountQuery);
    }, [amountQuery]);

    useEffect(() => {
        setDueDate(moment(dueDateQuery));
    }, [dueDateQuery]);
    return (
        <UI>
            You&lsquo;re planning{' '}
            <b>
                {depositsCount} monthly deposit{depositsCount > 1 ? 's' : ''}
            </b>{' '}
            to reach your <b>${amount ? amount : 0} goal</b> by{' '}
            <b>{dueDate.format('MMMM YYYY')}</b>
        </UI>
    );
};

export default Conclusion;
