import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={styles.contactContainer}>
      <p className={styles.contactName}>{contact.name}</p>
      <p className={styles.contactNumber}>{contact.number}</p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => {
          onDeleteHandler();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
