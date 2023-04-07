import './styles.less';
import { CLASSES } from './constants';
import Tooltip from '@mui/material/Tooltip';

interface UserCardProps {
    photo: string;
    name: string;
    position: string;
    email: string;
    phone: string;
}
export const UserCard = ({
    photo,
    name,
    position,
    email,
    phone,
}: UserCardProps): JSX.Element => {
    return (
        <div className={CLASSES.USER_CARD_UI}>
            <img src={photo} alt={name} className={CLASSES.USER_CARD__PHOTO} />
            <p className={CLASSES.USER_CARD__NAME}>{name}</p>
            <Tooltip
                title={position}
                classes={{ tooltip: CLASSES.TOOLTIP }}
                placement="bottom-end"
            >
                <p className={CLASSES.USER_CARD__POSITION}>{position}</p>
            </Tooltip>
            <Tooltip
                title={email}
                classes={{ tooltip: CLASSES.TOOLTIP }}
                placement="bottom-end"
            >
                <p className={CLASSES.USER_CARD__EMAL}>{email}</p>
            </Tooltip>
            <Tooltip
                title={phone}
                classes={{ tooltip: CLASSES.TOOLTIP }}
                placement="bottom-end"
            >
                <p className={CLASSES.USER_CARD__PHONE}>{phone}</p>
            </Tooltip>
        </div>
    );
};
