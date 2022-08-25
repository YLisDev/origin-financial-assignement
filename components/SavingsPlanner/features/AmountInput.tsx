import { useRouter } from 'next/router';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { AmountInput as UI } from '../UI';
import { formatInputData, getInitialQuery } from '../utils';

const AmountInput = () => {
    const [ammount, setAmmount] = useState('');
    const router = useRouter();

    useEffect(() => {
        const initialAmmount = getInitialQuery('amount', router);

        if (initialAmmount && ammount !== '0') {
            setAmmount(initialAmmount.split('%2C').join(','));
        }
    }, []);

    const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        
        if (value.slice(-1) === '.') setAmmount(value);;
        const formattedValue = formatInputData(value);
        setAmmount(formattedValue);
        router.query.amount = formattedValue.length > 0 ? formattedValue : '0';
        router.push(router, undefined, { shallow: true });
    };

    return (
        <UI
            value={ammount}
            onChange={handleChange}
            onClick={() => {
                ammount === '0' && setAmmount('');
            }}
        />
    );
};

export default AmountInput;
