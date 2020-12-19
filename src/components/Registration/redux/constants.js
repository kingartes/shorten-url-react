export const FIELDS = {
    userName: "userName",
    email: "email",
    password: "password",
    confirmPassword: "confirmPassword"
}

export const VALIDATION_PARAMS = {
    [FIELDS.userName]: {
        validation: "required",
        isValid: true
    },
    [FIELDS.email]: {
        validation: "required",
        isValid: true
    },
    [FIELDS.password]: {
        validation: "required",
        isValid: true
    },
    [FIELDS.confirmPassword]: {
        validation: "required",
        isValid: true
    }
}

export const initialFormModel = {
    [FIELDS.userName]: "",
    [FIELDS.email]: "",
    [FIELDS.password]: "",
    [FIELDS.confirmPassword]: ""
}