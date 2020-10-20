import * as yup from 'yup'

const createClassSchema = yup.object().shape({
    class_name: yup
        .string()
        .required('Please enter class name')
        .min(5, 'Please use more than 5 characters for class name'),
    class_duration: yup
        .string()
        .required('Please select a class duration'),
    class_intensity_level: yup
        .string()
        .required('Please enter class intensity level')
        .oneOf(['low', 'medium', 'high']),
    class_city: yup
        .string()
        .required('Please select your city')
        .oneOf(['Chicago', 'Colorado', 'New York', 'Los Angeles', 'San Francisco', 'Tennessee']),      
    class_date: yup
        .string()
        .required(),
    start_time: yup
        .string()
        .required('Please select a start time'),
    class_timezone: yup
        .string()
        .required('Please select a time zone')
        .oneOf(['Eastern', 'Mountain', 'Pacific']),
    type: yup
        .string()
        .required('Please select a class type')
        .oneOf(['yoga', 'pilates', 'crossfit', 'biking',
                'weightlifting', 'martial arts', 'boxing',
                'running', 'swimming', 'adventure']),
    max_attendees: yup
        .number()
        .required('Please enter class size')
})

export default createClassSchema