import { scaleLinear, scaleTime, timeFormat, extent } from 'd3';
import { useData } from '../Hooks/useData';
import { useState } from 'react';
import XAxis from '../IndividualComps/XAxis';
import YAxis from '../IndividualComps/YAxis';
import LineGraphMarks from '../IndividualComps/LineGraphMarks';
import regions from '../IndividualComps/regions';
import Dropdown from '../IndividualComps/Dropdown';

const dropdownVals = Object.keys(regions)
const width = 960
const height = 500
const margin = { top: 20, right: 30, bottom: 65, left: 90 }
const xAxisLabelOffset = 50
const yAxisLabelOffset = 45

const TimeLineGraph = () => {
    
    const [region, setRegion] = useState("London");
    const data = useData(region)

    if (!data ) {
        return (
            <pre>Loading...</pre>
        )
    }

    console.log(data)

    const innerHeight = height - margin.top - margin.bottom
    const innerWidth = width - margin.left - margin.right

    const xValue = d => d.date
    const xAxisLabel = 'Date'

    const yValue = d => d.newCases
    const yAxisLabel = 'New cases in your area'

    const xAxisTickFormat = timeFormat('%m')

    const xScale = scaleTime()
        .domain(extent(data, xValue))
        .range([0, innerWidth])
        .nice()

    const yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([innerHeight, 0])
        .nice()

    

    return (

    <>
        <Dropdown
        discreteVals={dropdownVals}
        val={region}
        onChange={(e) => setRegion(e.target.value)}
        />

        <svg width={width} height={height}
        data-testid = "graph group">
        <g transform={`translate(${margin.left},${margin.top})`}>
            <XAxis
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffset={7}
            />
            <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${innerHeight /
            2}) rotate(-90)`}
            >
            {yAxisLabel}
            </text>
            <YAxis yScale={yScale} innerWidth={innerWidth} tickOffset={7} />
            <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
            >
            {xAxisLabel}
            </text>
            <LineGraphMarks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
            />
        </g>
        </svg>
    </>
    )
}

export default TimeLineGraph