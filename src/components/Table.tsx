import React from 'react';

const Table = () => {
    const dummyData = [
        { brand: 'Brand 1', description: 'Description 1', members: 5, categories: ['Cat A', 'Cat B'], tags: ['Tag 1', 'Tag 2'], nextMeeting: '2024-03-18' },
        { brand: 'Brand 2', description: 'Description 2', members: 8, categories: ['Cat C', 'Cat D'], tags: ['Tag 3', 'Tag 4'], nextMeeting: '2024-03-20' },
        { brand: 'Brand 3', description: 'Description 3', members: 3, categories: ['Cat E', 'Cat F'], tags: ['Tag 5', 'Tag 6'], nextMeeting: '2024-03-22' },
        { brand: 'Brand 3', description: 'Description 3', members: 3, categories: ['Cat E', 'Cat F'], tags: ['Tag 5', 'Tag 6'], nextMeeting: '2024-03-22' },

    ];

    return (
        <>
            <div className='grid grid-flow-col grid-cols-6  divide-x-[1px] border-b-[1px] border-t-[1px]'>
                <div className='col-span-1 px-2'>Brand</div>
                <div className='col-span-1 px-2'>Description</div>
                <div className='col-span-1 px-2'>Members</div>
                <div className='col-span-1 px-2'>Categories</div>
                <div className='col-span-1 px-2'>Tags</div>
                <div className='col-span-1 px-2'>Next meeting</div>
                <div className='px-2'><i className="ri-add-line"></i></div>
            </div>
            {dummyData.map((data, index) => (
                <div className='grid grid-flow-col grid-cols-6 divide-x-[1px] border-b-[1px]' key={index}>
                    <div className='col-span-1 px-2'>{data.brand}</div>
                    <div className='col-span-1 px-2'>{data.description}</div>
                    <div className='col-span-1 px-2'>{data.members}</div>
                    <div className='col-span-1 px-2'>{data.categories}</div>
                    <div className='col-span-1 px-2'>{data.tags}</div>
                    <div className='col-span-1 px-2'>{data.nextMeeting}</div>
                    <div className='px-2'><i className="ri-add-line text-base text-white"></i></div>
                </div >
            ))}
            <div className='grid grid-flow-col grid-cols-6  divide-x-[1px] border-b-[1px] text-right font-semibold text-sm text-gray-500'>
                <div className='col-span-1 px-2'>count</div>
                <div className='col-span-1 px-2'><i className="ri-add-line mr-1"></i> Add calculation</div>
                <div className='col-span-1 px-2'><i className="ri-add-line mr-1"></i> Add calculation</div>
                <div className='col-span-1 px-2'><i className="ri-add-line mr-1"></i> Add calculation</div>
                <div className='col-span-1 px-2'><i className="ri-add-line mr-1"></i> Add calculation</div>
                <div className='col-span-1 px-2'></div>
                <div className='px-2'><i className="ri-add-line text-base text-white"></i></div>
            </div>
        </>
    );
}

export default Table;
