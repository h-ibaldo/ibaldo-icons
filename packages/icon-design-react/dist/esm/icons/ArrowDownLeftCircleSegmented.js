import { createElement, forwardRef } from 'react';

const ArrowDownLeftCircleSegmented = forwardRef(function ArrowDownLeftCircleSegmented(
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
    createElement('path', {"d":"M9 10L9 15L14 15","key":"0"}),
    createElement('path', {"d":"M15 9L9 15","key":"1"}),
    createElement('path', {"d":"M21.996 11.906C21.996 11.938 22 11.969 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C12.031 2 12.063 2.004 12.098 2.004","key":"2"}),
    createElement('path', {"d":"M15.648 2.695C18.234 3.711 20.289 5.766 21.305 8.352","key":"3"})
  );
});

ArrowDownLeftCircleSegmented.displayName = 'ArrowDownLeftCircleSegmented';

export default ArrowDownLeftCircleSegmented;
export { ArrowDownLeftCircleSegmented };
