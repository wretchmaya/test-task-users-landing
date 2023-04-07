import { CLASSES } from './constants';
import './styles.less';
import classNames from 'classnames';

export const Banner = ({ success, text }: { success: boolean; text: string }) => {
    return (
        <div
            className={classNames(CLASSES.BANNER_UI, {
                [CLASSES.SUCCESS]: success,
            })}
        >
            <h1 className={CLASSES.BANNER__TITLE}>{text}</h1>
            <div className={CLASSES.BANNER__IMAGE}></div>
        </div>
    );
};
