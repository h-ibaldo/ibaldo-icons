import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const ChartBarSquareDotThin = forwardRef(function ChartBarSquareDotThin(
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
    createElement(Path, {"d":"M21.974731440099276,10.000000003885361v7c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000003885361c0-2.761423749150708,2.238576250851111-5,5-5h7","key":"0"}),
    createElement(Circle, {"cx":"19.474731440099276","cy":"4.500000003885361","r":"2.5","key":"1"}),
    createElement(Line, {"x1":"7.974731440099276","y1":"16.000000003885361","x2":"7.974731440099276","y2":"12.000000003885361","key":"2"}),
    createElement(Line, {"x1":"11.974731440099276","y1":"16.000000003885361","x2":"11.974731440099276","y2":"8.000000003885361","key":"3"}),
    createElement(Line, {"x1":"15.974731440099276","y1":"16.000000003885361","x2":"15.974731440099276","y2":"11.000000003885361","key":"4"})
  );
});

ChartBarSquareDotThin.displayName = 'ChartBarSquareDotThin';

export default ChartBarSquareDotThin;
export { ChartBarSquareDotThin };
