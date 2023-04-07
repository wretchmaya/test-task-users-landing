import * as yup from 'yup';
export const validationSchema = yup.object({
    name: yup
        .string()
        .min(2, 'Name must be atleast 2 characters')
        .max(60, 'Name is too long')
        .required('Name is required'),
    email: yup
        .string()
        .matches(
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            'Invalid email format'
        )
        .required('Email is required'),
    phone: yup
        .string()
        .matches(
            /^[+]{0,1}380([0-9]{9})$/,
            'Invalid format, number should start with +380'
        )
        .required('Phone number is required'),
    file: yup.mixed().required('File is required'),
});
