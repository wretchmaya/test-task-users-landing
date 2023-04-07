import { ChangeEvent } from 'react';
import './styles.less';
import { TEXT } from '../../constants/text';
import { CLASSES } from './constants';

interface FileUploadInputProps {
    fileName: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeHolder: string;
}

export const FileUploadInput = ({
    fileName,
    onChange,
    placeHolder,
}: FileUploadInputProps) => {
    return (
        <div className={CLASSES.UPLOAD_FILE_UI}>
            <span className={CLASSES.UPLOAD_FILE__TEXT}>{fileName || placeHolder}</span>
            <input
                type="file"
                name="file"
                id="file"
                onChange={onChange}
                accept="image/jpg, image/jpeg"
            />
            <label htmlFor="file" className={CLASSES.UPLOAD_FILE__BUTTON}>
                <span className={CLASSES.UPLOAD_FILE__BUTTON_TEXT}>{TEXT.BUTTON.UPLOAD}</span>
            </label>
        </div>
    );
};
