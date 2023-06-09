import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    selectLoadingListStatus,
    selectPage,
    selectTotalPages,
    selectUserHasBeenCreated,
    selectUsers,
} from '../../store/rootReducer';
import {
    fetchUsersRequest,
    fetchShowMoreUsersRequest,
    getTokenRequest,
} from '../../store/api';
import { TEXT } from '../../constants/text';
import { CLASSES } from './constants';
import './styles.less';
import { UserCard } from '../UserCard/UserCard';
import { Button } from '../Button/Button';
import { Preloader } from '../Preloader/Preloader';
import { setEqualMaxHeight } from '../../utils/setEqualMaxHeight';

const UsersList = (): JSX.Element => {
    const users = useAppSelector(selectUsers);
    const page = useAppSelector(selectPage);
    const totalPages = useAppSelector(selectTotalPages);
    const isLoading = useAppSelector(selectLoadingListStatus);
    const userHasBeenAdded = useAppSelector(selectUserHasBeenCreated);
    const dispatch = useAppDispatch();
    const containerRef = useRef<HTMLDivElement>(null);
    const nextPage = page + 1;

    useEffect(() => {
        dispatch(fetchUsersRequest());
        dispatch(getTokenRequest());
    }, []);

    useEffect(() => {
        setEqualMaxHeight(containerRef);
    }, [users]);

    const handleShowMore = () => {
        if (!userHasBeenAdded) {
            dispatch(fetchShowMoreUsersRequest(nextPage));
            return;
        }
        dispatch(fetchUsersRequest());
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

            <div className={CLASSES.USERS_LIST__CONTENT} ref={containerRef}>
                {users.map(user => {
                    return <UserCard {...user} key={user.id} />;
                })}
            </div>

            {page !== totalPages && isShowMoreShown()}
        </section>
    );
};
export default UsersList;
