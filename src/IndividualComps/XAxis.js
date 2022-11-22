const XAxis = ({ 
    xScale, 
    innerWidth, 
    tickOffset = 3 }) => {

        xScale.ticks().map(tickValue => (
          <g className="tick" transform={`translate(0,${xScale(tickValue)})`}>
            <line x2={innerWidth} />
            <text
              key={tickValue}
              style={{ textAnchor: 'end' }}
              x={-tickOffset}
              dy=".71em"
            >
              {tickValue}
            </text>
          </g>
        ))
    }


export default XAxis