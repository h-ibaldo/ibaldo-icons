import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const RatioOneToOne = forwardRef(function RatioOneToOne(
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
    createElement(Line, {"x1":"11.999999993611709","y1":"10.008779299956586","x2":"11.999999993611709","y2":"9.998779299956368","key":"0"}),
    createElement(Line, {"x1":"11.999999993611709","y1":"14.008779299956586","x2":"11.999999993611709","y2":"13.998779299956368","key":"1"}),
    createElement(Polyline, {"points":"6.999999993611709 14.998779299956368 6.999999993611709 8.998779299956368 5.999999993611709 8.998779299956368","key":"2"}),
    createElement(Polyline, {"points":"16.999999993611709 14.998779299956368 16.999999993611709 8.998779299956368 15.999999993611709 8.998779299956368","key":"3"}),
    createElement(Rect, {"x":"1.999999993611709","y":"3.998779299956368","width":"20","height":"16","rx":"1","ry":"1","key":"4"})
  );
});

RatioOneToOne.displayName = 'RatioOneToOne';

export default RatioOneToOne;
export { RatioOneToOne };
