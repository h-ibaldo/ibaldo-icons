import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const ChartBarCircleCheckThin = forwardRef(function ChartBarCircleCheckThin(
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
    createElement(Path, {"d":"M21.799133300790345,10c.131225585930224.646240234367724.200866699209655,1.31494140625.200866699209655,2,0,5.52294921875-4.477172851549767,10-10,10-5.522827148439319,0-10-4.47705078125-10-10C2,6.477172851558862,6.477172851560681,2,12,2c.684997558590112,0,1.353698730470569.069580078117724,2,.200927734367724","key":"0"}),
    createElement(Polyline, {"points":"17 5 19 7 22 4","key":"1"}),
    createElement(Line, {"x1":"8","y1":"15","x2":"8","y2":"12","key":"2"}),
    createElement(Line, {"x1":"12","y1":"15","x2":"12","y2":"9","key":"3"}),
    createElement(Line, {"x1":"16","y1":"15","x2":"16","y2":"11","key":"4"})
  );
});

ChartBarCircleCheckThin.displayName = 'ChartBarCircleCheckThin';

export default ChartBarCircleCheckThin;
export { ChartBarCircleCheckThin };
