const YAxis = ({ 
    yScale, 
    innerWidth, 
    // tickFormat,
    tickOffset }) => 
        yScale.ticks().map(tickValue => (
          <g className="tick" transform={`translate(0,${yScale(tickValue)})`}>
            <line x2={innerWidth} stroke="LightGrey" />
            <text
              key={tickValue}
              style={{ textAnchor: 'end' }}
              x={-tickOffset}
              y={-7}
              dy=".71em"
            >
              {tickValue}
            </text>
          </g>
        ))
    


export default YAxis