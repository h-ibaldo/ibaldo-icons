import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Polyline } from 'react-native-svg';

const AccessibilityNodesFilled = forwardRef(function AccessibilityNodesFilled(
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
    createElement(Circle, {"cx":"12.025268549329667","cy":"3.997565476096497","r":"2","key":"0"}),
    createElement(Line, {"x1":"9.025268549329667","y1":"13.997565476048294","x2":"15.025268548970416","y2":"13.997565476048294","key":"1"}),
    createElement(Line, {"x1":"15.025268548970416","y1":"8.997565476096497","x2":"9.025268549329667","y2":"8.997565476096497","key":"2"}),
    createElement(Circle, {"cx":"9.025268548970416","cy":"20.997565476096952","r":".9999999999784","key":"3"}),
    createElement(Circle, {"cx":"4.025268548947679","cy":"12.997565476096952","r":".999999999977035","key":"4"}),
    createElement(Polyline, {"points":"9.025268548970416 20.997565476121054 9.025268548970416 13.997565476096497 9.025268548970416 8.997565476096497 4.025268548970416 12.997565476121054","key":"5"}),
    createElement(Circle, {"cx":"15.025268548969962","cy":"20.997565476120144","r":"1.000000000000682","key":"6"}),
    createElement(Circle, {"cx":"20.025268548969962","cy":"12.997565476120144","r":"1.000000000000682","key":"7"}),
    createElement(Polyline, {"points":"15.025268548970416 20.997565476121054 15.025268549279645 13.997565476255659 15.025268549059547 8.997565476255659 20.025268548970416 12.997565476121054","key":"8"})
  );
});

AccessibilityNodesFilled.displayName = 'AccessibilityNodesFilled';

export default AccessibilityNodesFilled;
export { AccessibilityNodesFilled };
