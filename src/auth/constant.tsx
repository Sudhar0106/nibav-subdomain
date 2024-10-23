import * as yup from 'yup';

export interface Formvalues {
    email: string,
    password: string
}

export const defaultValues: Formvalues = {
    email: "",
    password: ""
}

export const schema = yup.object().shape({
    email: yup.string().required("E-mail is required"),
    password: yup.string().required("Password is required")
});