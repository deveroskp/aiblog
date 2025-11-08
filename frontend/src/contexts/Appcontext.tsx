import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
    currentTab: string;
    setCurrentTab: (tab: string) => void;
    isLoggedIn?: boolean;
    setIsLoggedIn?: (loggedIn: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTab, setCurrentTab] = useState<string>('github');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <AppContext.Provider value={{ currentTab, setCurrentTab, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};