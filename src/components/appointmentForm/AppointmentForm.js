import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Title</label>
      <input id="name" onChange={e => setTitle(e.target.value)} value={title}></input>
      <ContactPicker contacts={contacts} value={contact} onChange={e => setContact(e.target.value)}/>
      <label htmlFor="date">Pick the date</label>
      <input type="date" min={getTodayString()} id="date" onChange={e => setDate(e.target.value)} value={date}></input>
      <label htmlFor="time">Pick the time</label>
      <input type="time" id="time" onChange={e => setTime(e.target.value)} value={time}></input>
      <button type="submit">Finalize appointment</button>
    </form>
    </>
  );
};
