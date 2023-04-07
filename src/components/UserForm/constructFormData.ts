import { FormValues } from './UserForm';

export const constructFormData = (
    { name, email, phone, file }: FormValues,
    positionId: string
) => {
    const formData = new FormData();
    formData.append('position_id', positionId);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', file);
    return formData;
};
