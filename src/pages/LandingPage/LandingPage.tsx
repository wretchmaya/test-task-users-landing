import { Header } from '../../components/Header/Header';
import { HeroSection } from '../../components/Hero/Hero';
import { UsersList } from '../../components/UsersList/UsersList';
import { UserForm } from '../../components/UserForm/UserForm';
import { CLASSES } from './constants';
import './styles.less';

export const LandingPage = () => {
    return (
        <div className={CLASSES.CONTENT_WRAPPER}>
            <Header />
            <main>
                <HeroSection />
                <UsersList />
                <UserForm />
            </main>
        </div>
    );
};
