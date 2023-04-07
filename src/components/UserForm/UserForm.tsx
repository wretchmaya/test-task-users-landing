import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TextField } from '@mui/material';
import { TEXT } from '../../constants/text';
import './styles.less';
import { CLASSES, FIELD_PROPS } from './constants';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '../Button/Button';
import { ChangeEvent, useState } from 'react';
import { FileUploadInput } from '../FileUploadInput/FileUploadInput';
import { createUserRequest } from '../../store/api';
import { constructFormData } from './constructFormData';
import { usePositions } from '../../store/hooks';
import {
    selectLoadingFormStatus,
    selectUserHasBeenCreated,
} from '../../store/rootReducer';
import { Preloader } from '../Preloader/Preloader';
import { Banner } from '../Banner/Banner';

export interface FormValues {
    name: string;
    email: string;
    phone: string;
    file: string | Blob;
}

const UserForm = () => {
    const dispatch = useAppDispatch();
    const userHasBeenCreated = useAppSelector(selectUserHasBeenCreated);
    const isLoading = useAppSelector(selectLoadingFormStatus);
    const [fileName, setFileName] = useState('');
    const { positions } = usePositions();
    const [position, setPosition] = useState({
        name: 'Lawyer',
        id: '1',
    });
    const initialValues: FormValues = {
        name: '',
        email: '',
        phone: '',
        file: '',
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {
            const formData = constructFormData(values, position.id);
            dispatch(createUserRequest(formData));
            formik.resetForm();
            setFileName('');
        },
    });

    const handlePositionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPosition({
            id: e.target.id,
            name: e.target.name,
        });
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            setFileName(file.name);
            formik.setFieldValue('file', file);
        }
    };

    return (
        <>
            {userHasBeenCreated ? (
                <Banner text={TEXT.BANNER.SUCCESS.TITLE} success />
            ) : (
                <div className={CLASSES.FORM_UI}>
                    <h1 className={CLASSES.FORM__TITLE}>{TEXT.FORM.TITLE}</h1>
                    {isLoading ? (
                        <Preloader />
                    ) : (
                        <form
                            className={CLASSES.FORM__CONTENT}
                            onSubmit={formik.handleSubmit}
                        >
                            <TextField
                                fullWidth
                                className={CLASSES.FORM__FIELD}
                                label={TEXT.TEXT_FIELD_LABEL.NAME}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                {...formik.getFieldProps(FIELD_PROPS.NAME)}
                            />

                            <TextField
                                fullWidth
                                className={CLASSES.FORM__FIELD}
                                label={TEXT.TEXT_FIELD_LABEL.EMAIL}
                                error={
                                    formik.touched.email && Boolean(formik.errors.email)
                                }
                                helperText={formik.touched.email && formik.errors.email}
                                {...formik.getFieldProps(FIELD_PROPS.EMAIL)}
                            />
                            <TextField
                                fullWidth
                                className={CLASSES.FORM__FIELD}
                                label={TEXT.TEXT_FIELD_LABEL.PHONE.TEXT}
                                error={
                                    formik.touched.phone && Boolean(formik.errors.phone)
                                }
                                helperText={
                                    formik.touched.phone
                                        ? formik.errors.phone
                                        : TEXT.TEXT_FIELD_LABEL.PHONE.TOOLTIP
                                }
                                {...formik.getFieldProps(FIELD_PROPS.PHONE)}
                            />
                            <RadioGroup
                                defaultValue={position}
                                className={CLASSES.FORM__RADIO_GROUP}
                                value={position.name}
                                onChange={handlePositionChange}
                            >
                                <h1 className={CLASSES.FORM__RADIO_GROUP_TITLE}>
                                    Select your position
                                </h1>
                                {positions.map(
                                    (position: { id: number; name: string }) => {
                                        return (
                                            <FormControlLabel
                                                className={
                                                    CLASSES.FORM__RADIO_GROUP_LABEL
                                                }
                                                value={position.name}
                                                control={
                                                    <Radio
                                                        id={position.id.toString()}
                                                        name={position.name}
                                                        sx={{
                                                            '& svg': {
                                                                fontSize: '2rem',
                                                            },
                                                        }}
                                                    />
                                                }
                                                label={position.name}
                                                key={position.id}
                                            />
                                        );
                                    }
                                )}
                            </RadioGroup>
                            <FileUploadInput
                                fileName={fileName}
                                onChange={handleFileChange}
                                placeHolder={TEXT.UPLOAD_FILE.PLACEHOLDER.PHOTO}
                            />
                            <Button
                                buttonType="submit"
                                text={TEXT.BUTTON.SIGN_UP}
                                disabled={!formik.isValid}
                            />
                        </form>
                    )}
                </div>
            )}
        </>
    );
};

export default UserForm;