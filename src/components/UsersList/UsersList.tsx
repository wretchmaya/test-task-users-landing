import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    selectLoadingListStatus,
    selectPage,
    selectTotalPages,
    selectUserHasBeenCreated,
    selectUsers,
} from '../../store/rootReducer';
import {
    fetchUpdatedUsersRequest,
    fetchUsersRequest,
    getTokenRequest,
} from '../../store/api';
import { TEXT } from '../../constants/text';
import { CLASSES } from './constants';
import './styles.less';
import { UserCard } from '../UserCard/UserCard';
import { Button } from '../Button/Button';
import { Preloader } from '../Preloader/Preloader';

export const UsersList = (): JSX.Element => {
    const users = useAppSelector(selectUsers);
    const page = useAppSelector(selectPage);
    const totalPages = useAppSelector(selectTotalPages);
    const isLoading = useAppSelector(selectLoadingListStatus);
    const userHasBeenAdded = useAppSelector(selectUserHasBeenCreated);
    const dispatch = useAppDispatch();
    const nextPage = page + 1;

    useEffect(() => {
        dispatch(fetchUsersRequest(page));
        dispatch(getTokenRequest());
    }, []);

    const handleShowMore = () => {
        if (!userHasBeenAdded) {
            dispatch(fetchUsersRequest(nextPage));
            return;
        }
        dispatch(fetchUpdatedUsersRequest());
    };

    const isShowMoreShown = () => {
        return isLoading ? (
            <Preloader />
        ) : (
            <Button text={TEXT.BUTTON.SHOW_MORE} clickHandler={handleShowMore} />
        );
    };
    return (
        <section className={CLASSES.USERS_LIST_UI}>
            <h1 className={CLASSES.USERS_LIST__TITLE}>{TEXT.USER_LIST_SECTION.TITLE}</h1>

            <div className={CLASSES.USERS_LIST__CONTENT}>
                {users.map((user, index) => {
                    return <UserCard {...user} key={index} />;
                })}
            </div>

            {page !== totalPages && isShowMoreShown()}
        </section>
    );
};
