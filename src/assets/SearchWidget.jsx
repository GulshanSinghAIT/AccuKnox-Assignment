import React, { useState, useContext } from 'react';
import { WidgetContext } from './WidgetContext';
import { MdManageSearch } from "react-icons/md";

const SearchWidget = () => {
    const { categories } = useContext(WidgetContext);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredWidgets = Object.entries(categories)
        .flatMap(([categoryName, widgets]) =>
            widgets.filter(widget => widget.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-between px-10 py-3 '>
                <h1 className='text-2xl font-semibold'>Widget Dashboard</h1>
                <div className='flex gap-2 pl-2 border-[2px] bg-gray-400 border-gray-600 items-center rounded-2xl '>
                    <MdManageSearch size={25} />
                    <input
                        className='w-[15em] md:w-[25em] lg:w-[30em]  focus:outline-none  rounded-2xl p-2'
                        type="text"
                        id='search'
                        placeholder="Search Widgets"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            All Widgets
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-5'>
                {filteredWidgets.map(widget => (
                    <div className='rounded-lg widget p-5' key={widget.id}>
                        <div className='flex gap-5 items-center'>
                            <div className="h-10 border-black border-[2px] w-10 rounded-lg  opacity-70" style={{ backgroundColor: widget.color, padding: '5px', borderRadius: '3px' }} >
                            </div>
                            <h4 className='text-md font-semibold' >
                                {widget.name}
                            </h4>
                        </div>
                        <p className=' mx-auto text-center'>{widget.text}</p>
                    </div>
                ))}</div>
        </>
    );
};

export default SearchWidget;
