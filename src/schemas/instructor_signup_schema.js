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
    name: yup
        .string()
        .required('Please enter your name')
        .min(4, 'Please use a name greater than 4 characters'),
    email: yup
        .string()
        .required('Please enter your email'),
    address: yup
        .string()
        .required('Please enter your address')
        .min(5, 'Please enter a valid address'),
    phone: yup
        .string()
        .required('Please enter your phone number'),
    crossfit: yup
        .boolean(),
    hiit: yup
        .boolean(),
    cardio: yup
        .boolean(),
    bodybuilding: yup
        .boolean(),
    yoga: yup
        .boolean(),
    pilates: yup
        .boolean(),
    monwedfri: yup
        .boolean(),
    tuethurs: yup
        .boolean(),
    satsun: yup
        .boolean(),
    about_me: yup
        .string()
});

export default instructorSignUpSchema