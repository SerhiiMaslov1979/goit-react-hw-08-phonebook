import React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
// import { ContactsForm } from './ContactsForm/ContactsForm';
// import { Filter } from './Filter/Filter';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from '../redux/Contacts/selectors';
// import ContactsList from './ContactsList/ContactsList';
// import { fetchContacts } from '../redux/Contacts/operations';

import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from '../hooks/useAuth';

import './App.css';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  // const contacts = useSelector(selectContacts);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // return (
  //   <div className="App__container">
  //     <h1>Phonebook</h1>
  //     <ContactsForm />
  //     <h2>Contacts</h2>
  //     <h3>Find contacts by name</h3>
  //     {contacts.length > 0 ? (
  //       <>
  //         <Filter />

  //         <ContactsList />
  //       </>
  //     ) : (
  //       <p>No contacts</p>
  //     )}
  //   </div>
  // );

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
