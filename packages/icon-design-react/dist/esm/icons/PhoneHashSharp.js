import { createElement, forwardRef } from 'react';

const PhoneHashSharp = forwardRef(function PhoneHashSharp(
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
    createElement('path', {"d":"M5.934 11.594L5.965 11.684C7.004 14.652 9.352 16.977 12.328 17.984","key":"0"}),
    createElement('path', {"d":"M12.402 15.59L13.926 14.789L17.922 17.188L17.336 20.113C17.199 20.789 16.762 21.363 16.145 21.668C15.742 21.871 15.281 21.945 14.832 21.883L13.531 21.695C11.172 21.359 8.949 20.398 7.09 18.91C6.324 18.297 5.625 17.598 5.012 16.828C3.523 14.973 2.563 12.746 2.223 10.391L2.039 9.086C1.973 8.637 2.047 8.18 2.25 7.773C2.559 7.16 3.133 6.719 3.809 6.586L6.734 6L9.133 9.996L8.406 10.793","key":"1"}),
    createElement('path', {"d":"M16 2L14 10","key":"2"}),
    createElement('path', {"d":"M20 2L18 10","key":"3"}),
    createElement('path', {"d":"M22 4L13 4","key":"4"}),
    createElement('path', {"d":"M21 8L12 8","key":"5"}),
    createElement('path', {"d":"M16 2L14 10","key":"6"}),
    createElement('path', {"d":"M20 2L18 10","key":"7"}),
    createElement('path', {"d":"M22 4L13 4","key":"8"}),
    createElement('path', {"d":"M21 8L12 8","key":"9"})
  );
});

PhoneHashSharp.displayName = 'PhoneHashSharp';

export default PhoneHashSharp;
export { PhoneHashSharp };
