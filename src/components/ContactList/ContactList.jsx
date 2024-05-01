import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectNameFilter);

  const filteredContacts = filter
    ? contacts.filter(
        (contact) =>
          contact.name &&
          contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;
  return (
    <div className={styles.contactListContainer}>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contactListItem}>
            <Contact key={contact.id} contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
