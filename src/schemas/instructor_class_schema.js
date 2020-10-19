import * as yup from 'yup'

const createClassSchema = yup.object().shape({
    class_name: yup
        .string()
        .required('Please enter class name')
        .min(5, 'Please use more than 5 characters for class name'),
    class_duration: yup
        .string()
        .required('Please select a class duration')
        .oneOf(['30 minutes', '45 minutes', '1 hour']),
    class_intensity_level: yup
        .string()
        .required('Please enter class intensity level')
        .oneOf(['low', 'medium', 'high']),
    class_city: yup
        .string()
        .required('Please select your city')
        .oneOf(['Chicago', 'Colorado', 'New York', 'Los Angeles', 'San Francisco', 'Tennessee']),      
    class_date: yup
        .string(),
    start_time: yup
        .string()
        .required('Please select a start time')
        .oneOf(['5 AM', '6 AM', '7 AM', '8 AM', '9 AM',
         '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM',
        '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM']),
    class_timezone: yup
        .string()
        .required('Please select a time zone')
        .oneOf(['Eastern', 'Mountain', 'Pacific']),
    type: yup
        .string()
        .required('Please select a class type')
        .oneOf(['yoga', 'pilates', 'crossfit', 'spin', 'weightlifting', 'boxing', 'swimming']),
    max_attendees: yup
        .number()
        .required('Please enter class size')
})

export default createClassSchema