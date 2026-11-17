import { createElement, forwardRef } from 'react';

const ArrowUpLeftCircleSegmented = forwardRef(function ArrowUpLeftCircleSegmented(
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
    createElement('path', {"d":"M9 14L9 9L14 9","key":"0"}),
    createElement('path', {"d":"M15 15L9 9","key":"1"}),
    createElement('path', {"d":"M21.996 12.094C21.996 12.063 22 12.031 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.031 22 12.063 21.996 12.098 21.996","key":"2"}),
    createElement('path', {"d":"M15.648 21.305C18.234 20.289 20.289 18.234 21.305 15.648","key":"3"})
  );
});

ArrowUpLeftCircleSegmented.displayName = 'ArrowUpLeftCircleSegmented';

export default ArrowUpLeftCircleSegmented;
export { ArrowUpLeftCircleSegmented };
