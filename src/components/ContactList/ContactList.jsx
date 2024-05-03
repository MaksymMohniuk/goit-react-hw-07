import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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
