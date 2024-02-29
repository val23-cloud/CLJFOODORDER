import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddMenu from '../../Components/AddMenu/AddMenu'
import ListMenu from '../../Components/ListMenu/ListMenu'
import Feedback from '../../Components/ViewFeedback/Feedback'
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addmenu' element={<AddMenu/>} />
        <Route path='/listmenu' element={<ListMenu/>} />
        <Route path='/viewfeedback' element={<Feedback/>} />
      </Routes>
    </div>
  )
}

export default Admin