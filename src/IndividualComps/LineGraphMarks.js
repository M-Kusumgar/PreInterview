import { line, curveNatural } from 'd3'

const LineGraphMarks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
}) => {
    
    return (
        <g className="marks">
            <path
            fill="none"
            stroke="black"
            d={line()
                .x(d => xScale(xValue(d)))
                .y(d => yScale(yValue(d)))
                .curve(curveNatural)(data)}
            />
        </g>
    )
}

export default LineGraphMarks