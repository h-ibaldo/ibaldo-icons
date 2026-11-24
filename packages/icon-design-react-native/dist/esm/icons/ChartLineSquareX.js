import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const ChartLineSquareX = forwardRef(function ChartLineSquareX(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Path, {"d":"M21.999999990599463,11.000000005347829v6c0,2.761423749150708-2.238576250839287,5-5,5H6.999999990599463c-2.761423749149799,0-5-2.238576250849292-5-5V7.000000005347829c0-2.761423749150708,2.238576250850201-5,5-5h6","key":"0"}),
    createElement(Polyline, {"points":"6.999999990599463 15.000000005169568 9.999999990599463 11.000000005169568 13.999999990599463 14.000000005169568 16.999999990599463 10.000000005169568","key":"1"}),
    createElement(Line, {"x1":"17.999999990599463","y1":"6.000000005347829","x2":"21.999999990599463","y2":"2.000000005347829","key":"2"}),
    createElement(Line, {"x1":"21.999999990699507","y1":"6.000000005260517","x2":"17.999999990510332","y2":"2.000000005438778","key":"3"})
  );
});

ChartLineSquareX.displayName = 'ChartLineSquareX';

export default ChartLineSquareX;
export { ChartLineSquareX };
