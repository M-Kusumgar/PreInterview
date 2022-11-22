import { useState, useEffect } from 'react';
import { csv } from 'd3';
import regions from '../IndividualComps/regions';



export const useData = ( selectedRegion ) => {
    
    const csvUrl = `https://api.coronavirus.data.gov.uk/v2/data?areaType=region&areaCode=${regions[selectedRegion]}&metric=newCasesBySpecimenDate&format=csv`
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