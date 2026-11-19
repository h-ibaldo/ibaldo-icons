import { createElement, forwardRef } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

const ProgressBarMultipleStripedJoined = forwardRef(function ProgressBarMultipleStripedJoined(
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
    createElement(Rect, {"x":"1.949462885142566","y":"3.000000000480213","width":"20","height":"18","key":"0"}),
    createElement(Line, {"x1":"21.949462885142566","y1":"15.000000000480213","x2":"1.949462885142566","y2":"15.000000000480213","key":"1"}),
    createElement(Line, {"x1":"1.949462885142566","y1":"9.000000000480213","x2":"21.949462885142566","y2":"9.000000000480213","key":"2"}),
    createElement(Line, {"x1":"15.949462885142566","y1":"9.000000000480213","x2":"15.949462885142566","y2":"15.000000000480213","key":"3"}),
    createElement(Line, {"x1":"7.949462885142566","y1":"3.000000000480213","x2":"7.949462885142566","y2":"9.000000000480213","key":"4"}),
    createElement(Line, {"x1":"12.949462885142566","y1":"15.000000000480213","x2":"12.949462885142566","y2":"21.000000000480213","key":"5"}),
    createElement(Line, {"x1":"1.949462885142566","y1":"7.000000000480213","x2":"5.949462885142566","y2":"3.000000000480213","key":"6"}),
    createElement(Line, {"x1":"1.949462885142566","y1":"13.000000000480213","x2":"5.949462885142566","y2":"9.000000000480213","key":"7"}),
    createElement(Line, {"x1":"3.949462885142566","y1":"15.000000000480213","x2":"9.949462885142566","y2":"9.000000000480213","key":"8"}),
    createElement(Line, {"x1":"7.949462885142566","y1":"15.000000000480213","x2":"13.949462885142566","y2":"9.000000000480213","key":"9"}),
    createElement(Line, {"x1":"1.949462885142566","y1":"19.000000000480213","x2":"5.949462885142566","y2":"15.000000000480213","key":"10"}),
    createElement(Line, {"x1":"3.949462885142566","y1":"21.000000000480213","x2":"9.949462885142566","y2":"15.000000000480213","key":"11"}),
    createElement(Line, {"x1":"7.949462885142566","y1":"21.000000000480213","x2":"12.949462885142566","y2":"16.000000000480213","key":"12"}),
    createElement(Line, {"x1":"11.949462885142566","y1":"15.000000000480213","x2":"15.949462885142566","y2":"11.000000000480213","key":"13"}),
    createElement(Line, {"x1":"3.949462885142566","y1":"9.000000000480213","x2":"7.949462885142566","y2":"5.000000000480213","key":"14"})
  );
});

ProgressBarMultipleStripedJoined.displayName = 'ProgressBarMultipleStripedJoined';

export default ProgressBarMultipleStripedJoined;
export { ProgressBarMultipleStripedJoined };
