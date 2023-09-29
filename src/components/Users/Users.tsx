import { IUser } from '../../shared/interfaces/user.interface';
import User from './User/User';

interface Props {
    users: IUser[];
    loading: boolean;
    error: string | null;
}

const UserList = ({ users, loading, error }: Props) => {
    return (
        <div>
            <h1>Список пользователей</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && users.length === 0 && <p>Users not found</p>}
            {!loading && !error && users.length > 0 && (
                <ul>
                    {users.map((user) => (
                        <User key={user.id} user={user} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
