import React, { useState } from 'react';
import { Query } from '../../shared/interfaces/query.interface';
import { defaultFilter } from '../../config/defaultFilter';
import { useFetchedUsers } from '../../hooks/useFetchedUsers';
import Pagination from '../Pagination/Pagination';
import Filter from '../Filter/Filter';
import Users from '../Users/Users';
import styles from './app.module.css';

const App = () => {
    const [filter, setFilter] = useState<Query>(defaultFilter);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const { users, loading, error } = useFetchedUsers(filter);

    const handleFilterChange = (newFilter: Query) => {
        setFilter(newFilter);
        setCurrentPage(1);
    }

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedUsers = users.slice(startIndex, endIndex);

    return (
        <div className={styles.app}>
            <Filter filter={filter} onFilterChange={handleFilterChange} />
            <Users users={displayedUsers} loading={loading} error={error} />
            <Pagination
                totalItems={users.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default App;
