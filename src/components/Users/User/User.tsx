import { IUser } from "../../../shared/interfaces/user.interface";

interface Props {
    user: IUser;
}

const User = ({ user }: Props) => {

    console.log(user);

    return (
        <li>
            {user.name}, {user.age}
        </li>
    )
}

export default User;