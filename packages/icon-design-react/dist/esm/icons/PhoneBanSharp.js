import { createElement, forwardRef } from 'react';

const PhoneBanSharp = forwardRef(function PhoneBanSharp(
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
    createElement('path', {"d":"M13 6.5C13 4.016 15.016 2 17.5 2C18.734 2 19.852 2.496 20.664 3.301L17.883 6.129L14.352 9.715C13.52 8.898 13 7.762 13 6.5Z","key":"0"}),
    createElement('path', {"d":"M20.664 3.301C21.488 4.117 22 5.25 22 6.5C22 8.984 19.984 11 17.5 11C16.273 11 15.164 10.512 14.352 9.715","key":"1"}),
    createElement('path', {"d":"M6.188 10.883L6.223 10.98C7.332 14.152 9.84 16.637 13.023 17.715","key":"2"}),
    createElement('path', {"d":"M13.102 15.152L14.73 14.301L19 16.863L18.375 19.988C18.23 20.711 17.762 21.324 17.105 21.652C16.672 21.871 16.18 21.949 15.699 21.879L14.309 21.684C11.789 21.32 9.41 20.293 7.426 18.703C6.602 18.047 5.859 17.301 5.199 16.48C3.609 14.492 2.582 12.117 2.223 9.598L2.023 8.203C1.957 7.723 2.035 7.234 2.25 6.801C2.582 6.145 3.195 5.676 3.914 5.531L7.043 4.906L9.605 9.176L8.832 10.027","key":"3"})
  );
});

PhoneBanSharp.displayName = 'PhoneBanSharp';

export default PhoneBanSharp;
export { PhoneBanSharp };
