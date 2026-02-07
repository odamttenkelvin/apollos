import {React} from 'react'
import { Link } from 'react-router-dom';

function QuoteBar() {

    return(
        <div className="flex bg-blue-100">
            <div className='flex gap-3 items-center p-2 mx-auto'>
                <p className='text-sm text-blue-600'><a href={''}></a>Offers</p>
                <p className='text-sm text-blue-600'><a href={''}></a>Business</p>
                <p className='text-sm text-blue-600'><a href={''}></a>Search</p>
                <p className='text-sm text-blue-600'><a href={''}></a>Accessibility toolbar</p>
            </div>

            {/*Right-side quobe bar*/}
            <div className={'flex space-x-3 items-center justify-between p-2 mx-auto'}>
                <h2 className='text-sm text-blue-600'> Find out how we can help power, protect and repair your home.</h2>
                <button className='bg-blue-600 rounded-md text-white text-sm hover:bg-blue-400 px-1 py-1'>Get a quote</button>
            </div>
        </div>
    )}

export default QuoteBar