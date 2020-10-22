import * as yup from 'yup'

const instructorSignUpSchema = yup.object().shape({
    username: yup
        .string()
        .required('Please enter your username')
        .min(4, 'Username must be greater than 4 characters'),
    password: yup
        .string()
        .required('Please enter your password')
        .min(10, 'Please use a password longer than 10 characters'),
    email: yup
        .string()
        .required('Please enter your email'),
    role: yup
        .string()
        .required('Please enter your auth code')
});

export default instructorSignUpSchema