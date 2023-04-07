import { CLASSES } from './constants';
import './styles.less';

export const Preloader = () => {
    return (
        <div className={CLASSES.PRELOADER_UI}>
            <div className={CLASSES.PRELOADER__SPINNER}></div>
        </div>
    );
};
