import React from 'react'
import Sidebar from "./components/layout/sidebar.jsx";
import Header from "./components/header/header.jsx";

function App() {
  return (
      <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indingo-50
          dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar />
                <div className='flex-1 flex-col overflow-y-auto bg-gray-50 dark:bg-slate-800'>
                    <Header />
                </div>
            </div>
      </div>
  )
}

export default App