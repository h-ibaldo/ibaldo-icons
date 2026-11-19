import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const ChecklistSquareTop = forwardRef(function ChecklistSquareTop(
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
    createElement(Line, {"x1":"10.949462885138928","y1":"4.000000000480213","x2":"21.949462885138928","y2":"4.000000000480213","key":"0"}),
    createElement(Line, {"x1":"10.949462885138928","y1":"12.000000000480213","x2":"21.949462885138928","y2":"12.000000000480213","key":"1"}),
    createElement(Line, {"x1":"10.949462885138928","y1":"20.000000000480213","x2":"21.949462885138928","y2":"20.000000000480213","key":"2"}),
    createElement(Polyline, {"points":"1.949462885138928 4.000000000480213 3.949462885138928 6.000000000480213 6.949462885138928 2.000000000480213","key":"3"}),
    createElement(Rect, {"x":"1.949462885138928","y":"10.000000000480213","width":"4","height":"4","key":"4"}),
    createElement(Rect, {"x":"1.949462885138928","y":"18.000000000480213","width":"4","height":"4","key":"5"})
  );
});

ChecklistSquareTop.displayName = 'ChecklistSquareTop';

export default ChecklistSquareTop;
export { ChecklistSquareTop };
