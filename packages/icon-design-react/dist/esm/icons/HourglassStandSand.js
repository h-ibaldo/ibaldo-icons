import { createElement, forwardRef } from 'react';

const HourglassStandSand = forwardRef(function HourglassStandSand(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M10 19L14 19","key":"0"}),
    createElement('path', {"d":"M4 2L20 2","key":"1"}),
    createElement('path', {"d":"M6 3L6 5.324C6 6.996 6.836 8.559 8.227 9.484L12 12L15.773 9.484C17.164 8.559 18 6.996 18 5.324L18 3","key":"2"}),
    createElement('path', {"d":"M20 22L4 22","key":"3"}),
    createElement('path', {"d":"M18 21L18 18.676C18 17.004 17.164 15.441 15.773 14.516L12 12L8.227 14.516C6.836 15.441 6 17.004 6 18.676L6 21","key":"4"})
  );
});

HourglassStandSand.displayName = 'HourglassStandSand';

export default HourglassStandSand;
export { HourglassStandSand };
