import React, { useCallback, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Registration.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectRegistrationForm, onValueChange } from './redux/registrationSlice';
import {VALIDATION_PARAMS} from './redux/constants';

const Registration = () => {
    const formModel = useSelector(selectRegistrationForm);
    const dispatch = useDispatch();
    const [validationParams, setValidationParams] = useState(VALIDATION_PARAMS);
    
    const validate = useCallback((formModel, validationParams) => {
        Object.keys(formModel).map((key) => {
            const params = validationParams[key];
            if ( params.validation === "required") {
                const value = formModel[key];
                validationParams[key].isValid = !!value.length;
                console.log(key, validationParams[key].isValid, value);
                setValidationParams({...validationParams});
            }
        });
    }, []);

    const buildHandler = useCallback((fieldName) => {
        return (event) => {
            const value = event.target.value;
            dispatch(onValueChange({ fieldName, value }));
        }
    }, [dispatch]);

    useEffect(() => {
        validate(formModel, validationParams);
    }, [formModel, validate, validationParams]);

    const onUserNameChange = buildHandler("userName");
    const onEmailChange = buildHandler("email");
    const onPasswordChange = buildHandler("password");
    const onConfirmPasswordChange = buildHandler("confirmPassword");


    return (
        <Form className={styles.registration}>
            <Form.Group controlId="formUserName">
                <Form.Label>User name</Form.Label>
                <Form.Control value={formModel.userName} isInvalid={!validationParams.userName.isValid} onChange={onUserNameChange} placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={formModel.email} isInvalid={!validationParams.email.isValid} onChange={onEmailChange} placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={formModel.password} isInvalid={!validationParams.password.isValid} onChange={onPasswordChange} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formRepeatPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" value={formModel.confirmPassword} isInvalid={!validationParams.confirmPassword.isValid} onChange={onConfirmPasswordChange} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Registration;