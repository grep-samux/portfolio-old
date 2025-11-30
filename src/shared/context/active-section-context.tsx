'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';
import type { SectionName } from '@/shared/lib/types';

type ActiveSectionContextProviderProps = {
  children: ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<null | ActiveSectionContextType>(
  null,
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within a ActiveSectionContextProvider',
    );
  }

  return context;
}
