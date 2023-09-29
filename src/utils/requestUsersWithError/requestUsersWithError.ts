import { baseQuery } from "../../config/baseQuery";
import { Query } from "../../shared/interfaces/query.interface";
import { IUser } from "../../shared/interfaces/user.interface";

export const requestUsersWithError = (
    params: Query = baseQuery
): Promise<IUser[]> => {
    return new Promise(() => {
        throw new Error("500, unknown server error");
    });
};