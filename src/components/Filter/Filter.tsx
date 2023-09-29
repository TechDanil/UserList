import { ChangeEvent } from "react";
import { Query } from "../../shared/interfaces/query.interface";
import styles from './filter.module.css';

interface Props {
    filter: Query;
    onFilterChange: (newFilter: Query) => void;
}

const Filter = ({ filter, onFilterChange }: Props) => {
    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;

        if (name === 'name' || name === 'age') {
            console.log('Updating filter:', { ...filter, [name]: value });
            onFilterChange({
                ...filter,
                [name]: value,
            });
        }
    }

    return (
        <div className={styles.filter}>
            <label htmlFor="name">Отфильтровать по имени</label>
            <input
                type="text"
                name="name"
                id="name"
                value={filter.name}
                onChange={handleInputChange}
            />

            <label htmlFor="age">Фильтр по возрасту</label>
            <input
                type="text"
                name="age"
                id="age"
                value={filter.age}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default Filter;
