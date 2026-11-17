import { createElement, forwardRef } from 'react';

const ArrowUpRightCircleSegmented = forwardRef(function ArrowUpRightCircleSegmented(
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
    createElement('path', {"d":"M15 14L15 9L10 9","key":"0"}),
    createElement('path', {"d":"M9 15L15 9","key":"1"}),
    createElement('path', {"d":"M2.004 12.094C2.004 12.063 2 12.031 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C11.969 22 11.938 21.996 11.902 21.996","key":"2"}),
    createElement('path', {"d":"M8.352 21.305C5.766 20.289 3.711 18.234 2.695 15.648","key":"3"})
  );
});

ArrowUpRightCircleSegmented.displayName = 'ArrowUpRightCircleSegmented';

export default ArrowUpRightCircleSegmented;
export { ArrowUpRightCircleSegmented };
