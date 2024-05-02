import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps.js";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const dispatch = useDispatch();
  const fetchedContacts = useSelector((state) => state.contacts.items);
  const isLoading = useSelector((state) => state.contacts.loading);
  const isError = useSelector((state) => state.contacts.error);

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
