import React from 'react'
import { Search } from 'lucide-react'


export default function SearchBar() {
    
    return (
    <div className='flex-1 max-w-md mx-8'>
        <div className='relative'>

        <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400'/>

        <input type='text' placeholder='Search anything' className={'w-full pl-10 pr-4 py-2.5 rounded-xl ' +
                'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ' +
            'text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2' +
            'focus:ring-blue-500 focus:border-transparent transition-all'}/>

    <button className={'absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 ' +
        'hover:text-slate-600 dark:hover:text-slate-300'}>
    </button>
        </div>
    </div>
)}