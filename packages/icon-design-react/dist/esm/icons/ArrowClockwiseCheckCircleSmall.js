import { createElement, forwardRef } from 'react';

const ArrowClockwiseCheckCircleSmall = forwardRef(function ArrowClockwiseCheckCircleSmall(
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
    createElement('path', {"d":"M20 3L20 7L16 7","key":"0"}),
    createElement('path', {"d":"M21 17C21 19.762 18.762 22 16 22C13.238 22 11 19.762 11 17C11 14.238 13.238 12 16 12C18.762 12 21 14.238 21 17Z","key":"1"}),
    createElement('path', {"d":"M19.465 6.969C17.848 4.574 15.105 3 12 3C7.027 3 3 7.031 3 12C3 16.973 7.027 21 12 21C12.32 21 12.633 20.965 12.945 20.934","key":"2"}),
    createElement('path', {"d":"M14.25 17L15.418 18.168L17.75 15.832","key":"3"})
  );
});

ArrowClockwiseCheckCircleSmall.displayName = 'ArrowClockwiseCheckCircleSmall';

export default ArrowClockwiseCheckCircleSmall;
export { ArrowClockwiseCheckCircleSmall };
