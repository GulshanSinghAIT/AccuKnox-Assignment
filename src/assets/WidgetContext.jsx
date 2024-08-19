import React, { createContext, useState } from 'react';

export const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
    const [categories, setCategories] = useState({
        "Executive Dashboard": [
            { id: 1, name: "Water Melon", text: "Sample text for Water Melon", color: "#4CAF50" },
            { id: 2, name: "Ice Cream", text: "Sample text for Ice Cream", color: "#f44336" },
            { id: 3, name: "Cake", text: "Sample text for Cake", color: "#fefe" },

        ],
        "Other Dashboard": [
            { id: 4, name: "Apple", text: "Sample text for Apple", color: "#ffffff" },

        ]
    });

    const addWidget = (categoryName, widget) => {
        setCategories(prev => ({
            ...prev,
            [categoryName]: [...prev[categoryName], widget]
        }));
    };

    const removeWidget = (categoryName, widgetId) => {
        setCategories(prev => ({
            ...prev,
            [categoryName]: prev[categoryName].filter(widget => widget.id !== widgetId)
        }));
    };

    return (
        <WidgetContext.Provider value={{ categories, addWidget, removeWidget }}>
            {children}
        </WidgetContext.Provider>
    );
};
