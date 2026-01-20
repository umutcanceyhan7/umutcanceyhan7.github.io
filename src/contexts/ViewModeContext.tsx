"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "2d" | "3d";

interface ViewModeContextType {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: ReactNode }) {
    const [viewMode, setViewMode] = useState<ViewMode>("2d");

    return (
        <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
            {children}
        </ViewModeContext.Provider>
    );
}

export function useViewMode() {
    const context = useContext(ViewModeContext);
    if (context === undefined) {
        throw new Error("useViewMode must be used within a ViewModeProvider");
    }
    return context;
}
