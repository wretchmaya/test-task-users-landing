import { CLASSES } from './constants';
import './styles.less';
import { Button } from '../Button/Button';
import { TEXT } from '../../constants/text';

export const HeroSection = () => {
    return (
        <div className={CLASSES.HERO_UI}>
            <section className={CLASSES.HERO__CONTENT}>
                <h1 className={CLASSES.HERO__TITLE}>{TEXT.HERO_SECTION.TITLE}</h1>
                <p className={CLASSES.HERO__TEXT}>{TEXT.HERO_SECTION.TEXT}</p>
                <Button text={TEXT.BUTTON.SIGN_UP} />
            </section>
        </div>
    );
};
