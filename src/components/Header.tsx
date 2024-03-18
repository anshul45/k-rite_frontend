

const Header = ({ search, setSearch }: any) => {

    return (
        <div className='flex justify-between items-center px-5 pb-1 border-b-2'>
            <div className='text-xl font-semibold'>Products</div>
            <div className='flex gap-3 items-center '>
                <div className='border-[1px] rounded-md px-1.5 py-0.5'>
                    <div><i className="ri-search-line mr-1.5"></i><input value={search} className='focus:outline-none' placeholder="Search for..." onChange={e => setSearch(e.target.value)} /></div>
                </div>
                <i className="ri-wechat-line text-xl border-[1px] px-1 rounded-lg"></i>
                <i className="ri-settings-3-line text-xl border-[1px] px-1 rounded-lg"></i>
            </div>
        </div >
    )
}

export default Header