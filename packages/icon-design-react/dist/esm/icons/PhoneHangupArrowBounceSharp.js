import { createElement, forwardRef } from 'react';

const PhoneHangupArrowBounceSharp = forwardRef(function PhoneHangupArrowBounceSharp(
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
    createElement('path', {"d":"M18 8.242L18 4L13.758 4M18 4L12.344 9.656L6 4","key":"0"}),
    createElement('path', {"d":"M16.547 17.465L16.461 17.422C13.609 16.047 10.289 16.063 7.453 17.465M9.105 19.223L8.59 20.875L4.043 22.012L2.375 19.516C1.992 18.938 1.895 18.219 2.113 17.563C2.258 17.129 2.531 16.75 2.898 16.477L3.957 15.68C5.875 14.242 8.141 13.348 10.52 13.082C11.504 12.973 12.496 12.973 13.48 13.082C15.859 13.348 18.125 14.242 20.043 15.68L21.102 16.477C21.469 16.75 21.742 17.129 21.887 17.563C22.105 18.219 22.008 18.938 21.625 19.516L19.957 22.012L15.41 20.875L15.355 19.793","key":"1"})
  );
});

PhoneHangupArrowBounceSharp.displayName = 'PhoneHangupArrowBounceSharp';

export default PhoneHangupArrowBounceSharp;
export { PhoneHangupArrowBounceSharp };
