import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './components/Index'
import Login from './components/Login'
import Layout from './Layout'
import Register from './components/Register'
import axios from "axios";
import { UserContextProvider } from './UserContext'
import Profile from './components/Profile'
import Places from './components/Places'
import Bookings from './components/Bookings'
import PlacesForm from './components/PlacesForm'
import Place from './components/Place'
import Booking from './components/Booking'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/account/bookings" element={<Bookings />} />
          <Route path="/account/places" element={<Places />} />
          <Route path="/account/places/new" element={<PlacesForm />} />
          <Route path="/account/places/:id" element={<PlacesForm />} />
          <Route path="/place/:id" element={<Place />} />
          <Route path="/account/bookings" element={<Bookings />} />
          <Route path="/account/bookings/:id" element={<Booking />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
