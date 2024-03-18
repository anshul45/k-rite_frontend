
import { useState } from 'react'
import Filters from './Filters'
import Header from './Header'

const Home = () => {
    const [search, setSearch] = useState("")
    console.log(search)
    return (
        <div className='flex-[1.9] w-full mx-2 my-2   py-1 border-[1px] rounded-md'>
            <Header search={search} setSearch={setSearch} />
            <Filters search={search} />
        </div>
    )
}

export default Home