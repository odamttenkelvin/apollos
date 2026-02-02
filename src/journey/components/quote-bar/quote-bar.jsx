import {React} from 'react'
import { Link } from 'react-router-dom';

function QuoteBar() {

    return(
        <div className="@container bg-blue-100">
            <div className='grid grid-flow-col grid-rows-3 gap-2' >
                <p className='row-span-3 text-sm text-blue-600'><a href={''}></a> Offers</p>
                <p className='row-span-3 text-sm text-blue-600'><a href={''}></a>Business</p>
                <p className='row-span-3 text-sm text-blue-600'><a href={''}></a>Search</p>
                <p className='row-span-3 text-sm text-blue-600'><a href={''}></a>Accessibility toolbar</p>
            </div>

            {/*Right-side quobe bar*/}
            <div className={'flex items-center space-x-3'}>
                <h2 className='text-sm text-blue-600 '> Find out how we can help power, protect and repair your home.</h2>
                <button className='bg-blue-600 rounded-md text-white text-sm hover:bg-blue-400 px-1 py-1'>Get a quote</button>
            </div>
        </div>
    )}

export default QuoteBar