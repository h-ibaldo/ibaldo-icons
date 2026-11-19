import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const ChartLinePeakCircleArrowRight = forwardRef(function ChartLinePeakCircleArrowRight(
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
    createElement(Polyline, {"points":"5.949462885141656 18.000000000749424 7.949462885141656 20.000000000749424 5.949462885141656 22.000000000749424","key":"0"}),
    createElement(Line, {"x1":"1.949462885141656","y1":"20.000000000749424","x2":"7.949462885141656","y2":"20.000000000749424","key":"1"}),
    createElement(Path, {"d":"M11.949462885141656,22.000000000749424c5.5228271484375,0,10-4.477172851558862,10-10,0-5.52294921875-4.4771728515625-10-10-10S1.949462885141656,6.477050781999424,1.949462885141656,12.000000000749424c0,1.04541015625.161682128907159,2.052734375.459228515625,3","key":"2"}),
    createElement(Polyline, {"points":"6.949462885141656 12.000000000927685 9.949462885141656 16.000000000927685 13.949462885141656 8.000000000927685 16.949462885141656 12.000000000927685","key":"3"})
  );
});

ChartLinePeakCircleArrowRight.displayName = 'ChartLinePeakCircleArrowRight';

export default ChartLinePeakCircleArrowRight;
export { ChartLinePeakCircleArrowRight };
