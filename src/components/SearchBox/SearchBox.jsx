import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    dispatch(changeFilter(inputValue));
  };
  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="text"
        value={filter}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBox;
