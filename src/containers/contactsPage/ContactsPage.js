import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { Tile } from "../../components/tile/Tile";

export const ContactsPage = ({contacts,AddContact}) => {
 const [name,setName] = useState('');
 const [phone,setPhone] = useState('');
 const [email,setEmail] = useState('');
 const [duplicateName,setDuplicateName] = useState(false);

  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !=="" || phone !== "" || email !== ""){
    contacts.push({
      name:name,
      phone:phone,
      email:email
    })
    setName('');
    setEmail('');
    setPhone('');
    AddContact();
    console.log(contacts);
  }
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if(contacts.filter((item) => item.name === name)){
      setDuplicateName(true);
      console.log(duplicateName);
    }
  },[name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit} name={name} phone={phone} email={email} setName={setName} setEmail={setEmail} setPhone={setPhone}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList array={contacts}/>
      </section>
    </div>
  );
};
