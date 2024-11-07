import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="phone">Phonenumber:</label>
      <input id="phone" type="phone" pattern='(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)' onChange={e => setPhone(e.target.value)} value={phone}></input>
      <label htmlFor="email">Email- adress:</label>
      <input id="email" type="email" onChange={e => setEmail(e.target.value)} value={email}></input>
      <button type="submit">Add contact</button>
      </form></>
  );
};

