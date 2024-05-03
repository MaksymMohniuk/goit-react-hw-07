import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps.js";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import Loader from "./components/Loader/Loader.jsx";
import {
  selectfetchedContacts,
  selectfetchedContactsIsError,
  selectfetchedContactsIsLoading,
} from "./redux/contactsSlice.js";

function App() {
  const dispatch = useDispatch();
  const fetchedContacts = useSelector(selectfetchedContacts);
  const isLoading = useSelector(selectfetchedContactsIsLoading);
  const isError = useSelector(selectfetchedContactsIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {fetchedContacts !== null && <ContactList />}
      </div>
    </>
  );
}

export default App;
