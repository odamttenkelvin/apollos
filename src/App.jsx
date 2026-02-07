import React from 'react'
import Header from "./journey/components/header/header.jsx";
import QuoteBar from "./journey/components/quote-bar/quote-bar.jsx";
import AnnouncementPage from "./journey/components/announcement/announcement-page.jsx";

function App() {
  return (
  <>
      <QuoteBar />
      <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indingo-50
          dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
            <div className='flex h-screen overflow-hidden'>
                {/*<Sidebar />*/}
                <div className='flex-1 flex-col overflow-y-auto bg-gray-50 dark:bg-slate-800'>
                    <Header />
                    <AnnouncementPage />
                </div>
            </div>
      </div>
  </>
  )
}

export default App