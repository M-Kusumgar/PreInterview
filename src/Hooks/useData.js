import { useState, useEffect } from 'react';
import { csv } from 'd3';

export const useData = ( selectedRegion, csvUrl ) => {
    
    const [data, setData] = useState(null);

    useEffect(() => {
        const row = d => {
          d.newCases = +d.newCasesBySpecimenDate
          d.date = new Date(d.date)
          return d
        };
        csv(csvUrl, row).then(setData)
    }, [selectedRegion]);

    return data
};