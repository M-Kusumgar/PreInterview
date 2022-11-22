const XAxis = ({ 
    xScale, 
    innerHeight,
    tickFormat,
    tickOffset = 10 }) => (
        xScale.ticks().map(tickValue => (
          <g className="tick"
          key={tickValue} 
          transform={`translate(${xScale(tickValue)},0)`}
          >
            <line y2={innerHeight} stroke="LightGrey" />
            <text
              key={tickValue}
              style={{ textAnchor: 'middle' }}
              y={innerHeight + tickOffset}
              dy=".71em"
            >
              {tickFormat(tickValue)}
            </text>
          </g>
        ))
    )


export default XAxis