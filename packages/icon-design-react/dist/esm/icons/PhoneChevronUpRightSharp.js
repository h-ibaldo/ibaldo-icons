import { createElement, forwardRef } from 'react';

const PhoneChevronUpRightSharp = forwardRef(function PhoneChevronUpRightSharp(
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
    createElement('path', {"d":"M6.906 9L6.945 9.113C8.242 12.828 11.18 15.738 14.906 17","key":"0"}),
    createElement('path', {"d":"M15 14L16.906 13L21.906 16L21.172 19.66C21.004 20.508 20.453 21.227 19.684 21.609C19.176 21.863 18.605 21.957 18.043 21.875L16.41 21.645C13.461 21.223 10.68 20.02 8.352 18.156C7.391 17.387 6.516 16.516 5.746 15.555C3.887 13.227 2.684 10.445 2.262 7.496L2.027 5.863C1.949 5.301 2.039 4.727 2.293 4.219C2.68 3.449 3.398 2.902 4.242 2.73L7.906 2L10.906 7L10 8","key":"1"}),
    createElement('path', {"d":"M22 7L22 2L17 2","key":"2"}),
    createElement('path', {"d":"M18 9L18 6L15 6","key":"3"})
  );
});

PhoneChevronUpRightSharp.displayName = 'PhoneChevronUpRightSharp';

export default PhoneChevronUpRightSharp;
export { PhoneChevronUpRightSharp };
