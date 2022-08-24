import { FC, useState } from 'react';
import { Button } from '../UI';

const ConfirmButton = () => {
    const [buttonText, setButtonText] = useState('Confirm');

    const handleClick = () => {
        // set new text and undo after timeout
        setButtonText('You are awesome!');
        setTimeout(() => {
            setButtonText('Confirm');
        }, 1500);
    };

    return <Button onClick={handleClick}>{buttonText}</Button>;
};

export default ConfirmButton;
