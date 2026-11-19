import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline } from 'react-native-svg';

const PollHorizontalPercent = forwardRef(function PollHorizontalPercent(
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
    createElement(Line, {"x1":"17.99999999981992","y1":"5.99999999981992","x2":"21.99999999981992","y2":"1.99999999981992","key":"0"}),
    createElement(Line, {"x1":"17.989999999819702","y1":"1.99999999981992","x2":"17.99999999981992","y2":"1.99999999981992","key":"1"}),
    createElement(Line, {"x1":"21.989999999819702","y1":"5.99999999981992","x2":"21.99999999981992","y2":"5.99999999981992","key":"2"}),
    createElement(Line, {"x1":"9.99999999981992","y1":"13.99999999981992","x2":"13.99999999981992","y2":"9.99999999981992","key":"3"}),
    createElement(Line, {"x1":"9.989999999819702","y1":"9.99999999981992","x2":"9.99999999981992","y2":"9.99999999981992","key":"4"}),
    createElement(Line, {"x1":"13.989999999819702","y1":"13.99999999981992","x2":"13.99999999981992","y2":"13.99999999981992","key":"5"}),
    createElement(Line, {"x1":"13.99999999981992","y1":"21.99999999981992","x2":"17.99999999981992","y2":"17.99999999981992","key":"6"}),
    createElement(Line, {"x1":"13.989999999819702","y1":"17.99999999981992","x2":"13.99999999981992","y2":"17.99999999981992","key":"7"}),
    createElement(Line, {"x1":"17.989999999819702","y1":"21.99999999981992","x2":"17.99999999981992","y2":"21.99999999981992","key":"8"}),
    createElement(Polyline, {"points":"1.99999999981992 1.99999999981992 13.99999999981992 1.99999999981992 13.99999999981992 5.99999999981992 1.99999999981992 5.99999999981992","key":"9"}),
    createElement(Polyline, {"points":"1.99999999981992 9.99999999981992 5.99999999981992 9.99999999981992 5.99999999981992 13.99999999981992 1.99999999981992 13.99999999981992","key":"10"}),
    createElement(Polyline, {"points":"1.99999999981992 17.99999999981992 9.99999999981992 17.99999999981992 9.99999999981992 21.99999999981992 1.99999999981992 21.99999999981992","key":"11"})
  );
});

PollHorizontalPercent.displayName = 'PollHorizontalPercent';

export default PollHorizontalPercent;
export { PollHorizontalPercent };
