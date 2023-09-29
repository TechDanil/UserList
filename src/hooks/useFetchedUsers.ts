import { useEffect, useState } from "react";
import { IUser } from "../shared/interfaces/user.interface"
import { Query } from "../shared/interfaces/query.interface";
import { requestUsers } from "../utils/requestUsers/requestUsers";

interface FetchedUsers {
    users: IUser[];
    loading: boolean;
    error: string | null;
}

export const useFetchedUsers = (initialFilter: Query) => {
    const [data, setData] = useState<FetchedUsers>({
        users: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await requestUsers(initialFilter);
                console.log(response)
                setData({
                    users: response,
                    loading: false,
                    error: response.length === 0 ? 'Users not found' : null,
                });
            } catch (error: any) {
                setData({
                    users: [],
                    loading: false,
                    error: error.toString(),
                });
            }
        }

        fetchData();
    }, [initialFilter]);

    return { ...data };
}