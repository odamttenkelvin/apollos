import React from 'react'
import {Filter, Menu, Search, Plus, Sun, Bell, Settings, User} from 'lucide-react'

function Header(){

    return <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50
        dark:border-slate-700/50 px-6 py-4'>

        <div className='flex items-center justify-between'>

            {/* Left section */}
            <div className='flex items-center space-x-4'>
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100
                dark:hover:bg-slate-800 transition-colors'>
                    <img src={''} alt='logo' className='w-8 h-8'/>
                    {/*<Menu className='w-6 h-6 text-gray-500' />*/}
                </button>

                <div className='hidden md:block'>
                    <h1 className='text-2xl font-bold text-slate-800 dark:text-white'>Dashboard</h1>
                    {/*<p className='text-sm text-slate-500 dark:text-slate-400'>Overview of all activities</p>*/}
                </div>
            </div>

            {/* Right */}
            {/*<div className='flex items-center space-x-3'>*/}
            {/*    /!*Quick Action Button*!/*/}
            {/*    <button className='hidden lg:flex items-center space-x-2 py-2 bg-linear-to-r px-4 from-blue-500*/}
            {/*    to-purple-600 text-white rounded-xl hover:shadow-lg transition-a'>*/}
            {/*        <Plus className='w-5 h-5 cursor-pointer'/>*/}
            {/*        <span className='text-sm font-medium cursor-pointer'>New</span>*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*/!* Toggle*!/*/}
            {/*<button className={'p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800  transition-colors'}>*/}
            {/*    <Sun className='w-5 h-5' />*/}
            {/*</button>*/}

            {/*/!*Notification*!/*/}
            {/*<button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100*/}
            {/*dark:hover:bg-slate-800 transition-colors'>*/}
            {/*    <Bell className='w-5 h-5' />*/}
            {/*    <span className='absolute top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex*/}
            {/*    items-center justify-center'>3</span>*/}
            {/*</button>*/}

            {/*/!*Settings*!/*/}
            {/*<button className={'p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 ' +*/}
            {/*    'dark:hover:bg-slate-800 transition-colors'}>*/}
            {/*    <Settings className='w-5 h-5 dark:text-slate-300' />*/}
            {/*</button>*/}

            {/*User profile*/}
            {/*<div className='flex items-center space-x-3'>*/}
            {/*    <img src={''} alt='user profile' className='w-10 h-10 rounded-full ring-2 ring-blue-500 object-cover'/>*/}
            {/*    <div className={'flex-1 min-w-0'}>*/}
            {/*        <p className='text-sm font-medium text-slate-800 dark:text-white'>*/}
            {/*            Alex Johnson*/}
            {/*        </p>*/}
            {/*        <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>*/}
            {/*            Admin*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className='flex items-center space-x-3'>
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>Energy</button>
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>Cover</button>
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>Heating</button>
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>Plumbing</button>
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>Electrical</button>
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>Appliances</button>
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>Help</button>

            </div>


            {/*User profile dropdown*/}
            <div className='flex items-center space-x-3'>
                <User className='w-5 h-5 bg-slate-100 ring-blue-500 object-cover'/>
                <p className='text-sm font-medium text-slate-800 dark:text-white'>Account</p>
            </div>


        </div>
    </div>

}
export default Header