import { Header } from '../../components/Header/Header';
import { HeroSection } from '../../components/Hero/Hero';
import UsersList from '../../components/UsersList/index';
import UserForm from '../../components/UserForm/index';
import { CLASSES } from './constants';
import './styles.less';
import { Suspense } from 'react';
import { Preloader } from '../../components/Preloader/Preloader';

export const LandingPage = () => {
    return (
        <div className={CLASSES.CONTENT_WRAPPER}>
            <Header />
            <main>
                <HeroSection />
                <Suspense fallback={<Preloader />}>
                    <UsersList />
                    <UserForm />
                </Suspense>
            </main>
        </div>
    );
};
