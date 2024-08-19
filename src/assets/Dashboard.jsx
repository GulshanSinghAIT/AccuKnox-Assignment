// Dashboard.js
import React, { useContext, useState } from 'react';
import { WidgetContext } from './WidgetContext';

const Dashboard = () => {
    const { categories, addWidget, removeWidget } = useContext(WidgetContext);
    const [widgetName, setWidgetName] = useState("");
    const [widgetText, setWidgetText] = useState("");
    const [widgetColor, setWidgetColor] = useState("#ffffff");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleAddWidget = () => {
        const newWidget = {
            id: Date.now(),
            name: widgetName,
            text: widgetText,
            color: widgetColor // Selected color
        };
        addWidget(selectedCategory, newWidget);
        setWidgetName('');
        setWidgetText('');
        setWidgetColor('#ffffff');
    };

    return (
        <div>
            <div className='flex flex-col gap-2 justify-around m-2 p-1  '>
                <h3>Add New Widget</h3>
                <div className=' m-2 px-3 py-2 items-center rounded-lg grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-14 bg-slate-400 grid'>
                    <select className='bg-slate-300 px-2 py-1 rounded-lg' onChange={e => setSelectedCategory(e.target.value)} value={selectedCategory}>
                        <option value="">Select Category</option>
                        {Object.keys(categories).map(categoryName => (
                            <option key={categoryName} value={categoryName}>{categoryName}</option>
                        ))}
                    </select>
                    <input
                    className='bg-slate-300 px-2 py-1 rounded-lg  focus:outline-none'
                        type="text"
                        value={widgetName}
                        onChange={e => setWidgetName(e.target.value)}
                        placeholder="Widget Name"
                    />
                    <input
                     className=' bg-slate-300 px-2 py-1 rounded-lg  focus:outline-none'
                        value={widgetText}
                        onChange={e => setWidgetText(e.target.value)}
                        placeholder="Widget Text"
                    ></input>

                    
                    <div className='flex gap-1'>
                        <p>Select Color</p>
                    <input
                    className=' bg-inherit'
                        type="color"
                        value={widgetColor}
                         
                        onChange={e => setWidgetColor(e.target.value)}
                    />
                    </div>

                    <button className='bg-slate-500 py-1 px-3 rounded-md text-white hover:bg-slate-300 hover:text-black duration-200' onClick={handleAddWidget}>Add Widget</button>
                </div>
            </div>
            
            {Object.keys(categories).map(categoryName => (
                <div key={categoryName}>
                    <h3>{categoryName}</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-5'>
                        {categories[categoryName].map(widget => (
                            <div key={widget.id} className="rounded-lg bg-slate-200 widget  grid gap-2  p-4">
                                <div className='flex gap-5 items-center'>
                                    <div className="h-10 border-black border-[2px] w-10 rounded-lg  opacity-70" style={{ backgroundColor: widget.color, padding: '5px', borderRadius: '3px' }} >
                                    </div>
                                    <h4 className='text-md font-semibold' >
                                        {widget.name}
                                    </h4>
                                </div>

                                <p className=' mx-auto text-center'>{widget.text}</p>
                                <button className='text-xs w-20  relative bg-gray-300 px-3 py-[3px] rounded-md border-[1.5px] hover:bg-gray-100  duration-200 border-black' onClick={() => removeWidget(categoryName, widget.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Dashboard;
