interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (newPage: number) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
    onPageChange,
    currentPage,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    return (
        <div className="pagination">
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous
            </button>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}

export default Pagination;