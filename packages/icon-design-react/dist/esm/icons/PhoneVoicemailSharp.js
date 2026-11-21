import { createElement, forwardRef } from 'react';

const PhoneVoicemailSharp = forwardRef(function PhoneVoicemailSharp(
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
    createElement('path', {"d":"M5.941 10.625L5.973 10.719C7.016 13.703 9.379 16.043 12.375 17.059","key":"0"}),
    createElement('path', {"d":"M12.449 14.645L13.98 13.844L18 16.254L17.41 19.195C17.277 19.875 16.836 20.453 16.215 20.762C15.809 20.969 15.348 21.043 14.895 20.977L13.582 20.789C11.211 20.453 8.977 19.484 7.105 17.988C6.332 17.371 5.629 16.668 5.012 15.895C3.516 14.023 2.547 11.789 2.211 9.418L2.023 8.105C1.957 7.652 2.031 7.191 2.238 6.785C2.547 6.164 3.125 5.723 3.801 5.59L6.746 5L9.156 9.02L8.43 9.824","key":"1"}),
    createElement('path', {"d":"M11 5C11 3.895 11.895 3 13 3C14.105 3 15 3.895 15 5C15 6.105 14.105 7 13 7C11.895 7 11 6.105 11 5Z","key":"2"}),
    createElement('path', {"d":"M18 5C18 3.895 18.895 3 20 3C21.105 3 22 3.895 22 5C22 6.105 21.105 7 20 7C18.895 7 18 6.105 18 5Z","key":"3"}),
    createElement('path', {"d":"M13 7L20 7","key":"4"})
  );
});

PhoneVoicemailSharp.displayName = 'PhoneVoicemailSharp';

export default PhoneVoicemailSharp;
export { PhoneVoicemailSharp };
