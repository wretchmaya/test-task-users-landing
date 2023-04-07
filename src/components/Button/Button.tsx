import { CLASSES } from './constants';
import './styles.less';
import classnames from 'classnames';

interface ButtonProps {
    text: string;
    clickHandler?: () => void;
    buttonType?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button = ({ text, clickHandler, buttonType, disabled }: ButtonProps) => {
    return (
        <button
            onClick={clickHandler}
            className={classnames(CLASSES.ACTION_BUTTON, {
                [CLASSES.DISABLED]: disabled,
            })}
            type={buttonType || 'button'}
            disabled={disabled}
        >
            {text}
        </button>
    );
};
