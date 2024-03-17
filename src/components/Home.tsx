
import Filters from './Filters'
import Header from './Header'

const Home = () => {
    return (
        <div className='flex-[1.9] w-full mx-2 my-2   py-2.5 border-[1px] rounded-md'>
            <Header />
            <Filters />
        </div>
    )
}

export default Home