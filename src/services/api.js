import axios from "axios";

const instance = axios.create({
  baseURL: "https://66328acdc51e14d69564c1b3.mockapi.io",
});

export const requestContacts = async () => {
  const { data } = await instance.get("/contacts");

  return data;
};

export const apiAddContact = async (contactData) => {
  const { data } = await instance.post(`/contacts`, contactData);

  return data;
};

export const apiDeleteContact = async (contactId) => {
  const { data } = await instance.delete(`/contacts/${contactId}`);

  return data;
};
