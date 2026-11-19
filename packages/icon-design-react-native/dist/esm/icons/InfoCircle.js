import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const InfoCircle = forwardRef(function InfoCircle(
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
    createElement(Circle, {"cx":"11.94946287847597","cy":"11.997562036048294","r":"10","key":"0"}),
    createElement(Line, {"x1":"11.949462878465056","y1":"7.987562035596966","x2":"11.949462878465056","y2":"7.997562035597184","key":"1"}),
    createElement(Line, {"x1":"11.949462878465056","y1":"15.997562035597184","x2":"11.949462878465056","y2":"11.997562035597184","key":"2"})
  );
});

InfoCircle.displayName = 'InfoCircle';

export default InfoCircle;
export { InfoCircle };
