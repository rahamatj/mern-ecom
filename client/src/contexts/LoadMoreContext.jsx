import { createContext, useState } from 'react'

export const LoadMoreContext = createContext()

export const LoadMoreProvider = ({ children }) => {
    const [page, setPage] = useState(1);

    const increasePage = (nextPage) => {
        setPage(nextPage);
    }

    return (
        <LoadMoreContext.Provider value={{ page, increasePage }}>
            {children}
        </LoadMoreContext.Provider>
    );
}