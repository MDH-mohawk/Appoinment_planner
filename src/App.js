import React,{useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { TileList } from "./components/tileList/TileList";

function App() {

   /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts,setContacts] = useState([]);
  const [appoinments,setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
 function AddContact(){
  setContacts(contacts);
  console.log(contacts)
 }

 function AddAppointment(){
    setAppointments(appoinments)
    console.log(appoinments)

 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage AddContact={AddContact} contacts={contacts}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appoinments} contacts={contacts} AddAppointment={AddAppointment}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
