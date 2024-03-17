import Table from "./Table"

const Filters = () => {
    return (
        <div className="flex flex-col h-[calc(100vh-86px)] justify-between">
            <div>

                <div className='flex justify-between items-center px-5 py-2.5'>
                    <div className='flex gap-3 items-center'>
                        <div className='border-[1px] px-1.5 py-0.5 rounded-md cursor-pointer'>
                            <i className="ri-apps-2-line mr-1"></i>
                            All brands
                            <i className="ri-arrow-down-s-fill ml-1"></i>
                        </div>
                        <div className='border-[1px] px-1.5 py-0.5 rounded-md cursor-pointer'>
                            Desk
                            <i className="ri-arrow-down-s-fill ml-2"></i>
                        </div>
                        <div className='border-[1px] px-1.5 py-0.5 rounded-md cursor-pointer'>
                            Tags
                            <i className="ri-arrow-down-s-fill ml-2"></i>
                        </div>
                        <div className='border-[1px] px-1.5 py-0.5 rounded-md cursor-pointer'>
                            <i className="ri-sort-alphabet-asc mr-2"></i>
                            Sort
                        </div>
                        <div className='border-[1px] px-1.5 py-0.5 rounded-md cursor-pointer'>
                            <i className="ri-equalizer-line mr-2"></i>
                            FIlter
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='border-[1px] px-1.5 py-0.5 rounded-md cursor-pointer'>
                            <i className="ri-equalizer-line mr-2"></i>
                            Meeting
                        </div>
                        <div className='border-[1px] px-1.5 py-0.5 rounded-md cursor-pointer'>
                            <i className="ri-equalizer-line mr-2"></i>
                            Import/Export
                        </div>
                    </div>
                </div>
                <Table />
            </div>
            <div className="flex justify-center">

                <div className="flex items-center gap-3 m-3 w-fit border-[1px] py-1.5 px-2.5 rounded-md">
                    <div className="flex justify-center items-center gap-1"><div className="bg-black text-white px-1.5 text-sm rounded-md">3</div>selected</div>
                    <div className='border-[1px] px-1 rounded-md cursor-pointer'>
                        <i className="ri-inbox-archive-line mr-1"></i>
                        Archive
                    </div>
                    <div className='border-[1px] px-1 rounded-md cursor-pointer text-red-800'>
                        <i className="ri-delete-bin-7-line mr-1"></i>
                        Delete
                    </div>
                    <div className='border-[1px] px-1 rounded-md cursor-pointer'>
                        More
                        <i className="ri-arrow-down-s-fill ml-1"></i>
                    </div>
                    <i className="ri-close-line"></i>
                </div>
            </div>
        </div>
    )
}

export default Filters