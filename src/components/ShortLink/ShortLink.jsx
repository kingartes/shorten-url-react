import React, {useCallback, useState} from 'react';

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
            <input width={400} value={link} onChange={inputOnChangeHandler}></input>
            <button onClick={buttonClickHandler}>Get short link</button>
        </>
    )
}

export default ShortLink;