import { useContext } from 'react';
import { CitiesContext } from '../contexts/CitiesContext';

function useCitiesContext() {
    const context = useContext(CitiesContext);
    if (context === undefined) throw new Error('CitiesContext was used outside the CitiesProvider');
    return context;
}

export default useCitiesContext;
