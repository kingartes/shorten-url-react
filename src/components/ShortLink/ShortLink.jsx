import React, {useCallback, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ShortLink = () => {
    const [link, setLink] = useState('');
    const buttonClickHandler = useCallback(() => {
        console.log(link);
    }, [link]);
    const inputOnChangeHandler = useCallback((e) => {
        setLink(e?.target?.value);
    }, [setLink])

    return (
        <>
            <Form.Control width={400} value={link} onChange={inputOnChangeHandler}></Form.Control>
            <Button onClick={buttonClickHandler} variant="primary">Get short link</Button>
        </>
    )
}

export default ShortLink;