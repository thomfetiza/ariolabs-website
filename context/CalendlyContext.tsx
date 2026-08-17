
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { PopupModal } from 'react-calendly';

interface CalendlyContextType {
  openModal: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <CalendlyContext.Provider value={{ openModal }}>
      {children}
      {typeof window !== 'undefined' && document.getElementById('root') && (
        <PopupModal
          url="https://calendly.com/ariolabs/ai-consultation-ph"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById('root')!}
          pageSettings={{ textColor: 'ffffff', primaryColor: '06B6D4' }}
        />
      )}
    </CalendlyContext.Provider>
  );
};

export const useCalendly = (): CalendlyContextType => {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error('useCalendly must be used within a CalendlyProvider');
  }
  return context;
};
