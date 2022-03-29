import styles from "./Pagination.module.css";
const Pagination = ({currentPage, pokePerPage, totalPoke, setCurrentPage}) => {
  const pageCount = Math.ceil(totalPoke / pokePerPage);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pages.length &&
        pages.map(page => (
          <button
            key={page}
            className={page === currentPage ? styles.active : styles.page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
