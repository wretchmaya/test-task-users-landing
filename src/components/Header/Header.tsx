import './styles.less';
import { CLASSES } from './contants';
import { Button } from '../Button/Button';
import TestTaskLogo from '../../assets/test-task-logo.svg';
import { TEXT } from '../../constants/text';

export const Header = (): JSX.Element => {
    return (
        <header className={CLASSES.HEADER_UI}>
            <div className={CLASSES.HEADER__CONTENT_WRAPPER}>
                <img src={TestTaskLogo} alt="logo" className={CLASSES.HEADER__LOGO} />

                <div className={CLASSES.HEADER__BUTTON_WRAPPER}>
                    <Button text={TEXT.BUTTON.USERS}></Button>
                    <Button text={TEXT.BUTTON.SIGN_UP}></Button>
                </div>
            </div>
        </header>
    );
};
