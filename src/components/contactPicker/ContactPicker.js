import React from "react";

export const ContactPicker = ({contacts,onChange,value,name}) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name}>
        <option default value="" >No Contact Selected</option>
        {contacts.map(contact =>{
          return <option value={contact.name}>{contact.name}</option>
        }
        )
        }

      </select>
    </>
  );
};
