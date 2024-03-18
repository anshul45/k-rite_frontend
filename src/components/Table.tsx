
const Table = ({ dummyData }: any) => {


    return (
        <>
            <div className='grid grid-flow-col grid-cols-6  divide-x-[1px] border-b-[1px] border-t-[1px]  text-gray-500'>
                <div className='col-span-1 px-2 py-1.5'><input type="checkbox" className="accent-black rounded-md mr-1.5" />Brand</div>
                <div className='col-span-1 px-2 py-1.5'>Description</div>
                <div className='col-span-1 px-2 py-1.5'>Members</div>
                <div className='col-span-1 px-2 py-1.5'>Categories</div>
                <div className='col-span-1 px-2 py-1.5'>Tags</div>
                <div className='col-span-1 px-2 py-1.5'>Next meeting</div>
                <div className='px-2'><i className="ri-add-line"></i></div>
            </div>
            {dummyData.map((data: any, index: any) => (
                <div className='grid grid-flow-col grid-cols-6 divide-x-[1px] border-b-[1px]' key={index}>
                    <div className='col-span-1 px-2 py-1 flex items-center gap-2 text-sm font-bold'><input type="checkbox" className="accent-black rounded-md mr-1.5" /><img className="w-7 h5" alt="image" src={data.url} />{data.brand}</div>
                    <div className='col-span-1 px-2 py-1 text-sm font-bold text-nowrap overflow-x-hidden'>{data.description.length > 20 ? `${(data.description.slice(0, 20))}...` : data.description}</div>
                    <div className='col-span-1 px-2 py-1'>{data.members}</div>
                    <div className='col-span-1 px-2 py-1 text-sm'>{data.categories}</div>
                    <div className='col-span-1 px-2 py-1 text-sm'> <span className="border-[1px] bg-gray-100 px-1 py-0.5 rounded-md">{data.tags}</span></div>
                    <div className='col-span-1 px-2 py-1 text-sm'>{data.nextMeeting}</div>
                    <div className='px-2'><i className="ri-add-line text-base text-white"></i></div>
                </div >
            ))}
            <div className='grid grid-flow-col grid-cols-6  divide-x-[1px] border-b-[1px] text-right font-semibold text-sm text-gray-500'>
                <div className='col-span-1 px-2 py-1'><span className="mr-1">{dummyData.length}</span>count</div>
                <div className='col-span-1 px-2 py-1'><i className="ri-add-line mr-1"></i> Add calculation</div>
                <div className='col-span-1 px-2 py-1'><i className="ri-add-line mr-1"></i> Add calculation</div>
                <div className='col-span-1 px-2 py-1'><i className="ri-add-line mr-1"></i> Add calculation</div>
                <div className='col-span-1 px-2 py-1'><i className="ri-add-line mr-1"></i> Add calculation</div>
                <div className='col-span-1 px-2 py-1'></div>
                <div className='px-2'><i className="ri-add-line text-base text-white"></i></div>
            </div>
        </>
    );
}

export default Table;
