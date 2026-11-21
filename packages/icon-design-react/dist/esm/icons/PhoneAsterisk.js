import { createElement, forwardRef } from 'react';

const PhoneAsterisk = forwardRef(function PhoneAsterisk(
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
    createElement('path', {"d":"M8.043 17.867L6.141 15.965C4.398 14.223 3.086 12.098 2.309 9.762C1.754 8.098 1.953 6.277 2.855 4.777L3.938 2.973C4.301 2.367 4.949 2 5.652 2L6.535 2C7.207 2 7.828 2.336 8.199 2.891L10.465 6.285C11.133 7.289 10.77 8.648 9.695 9.184L7.605 10.23L8.172 11.363C9.141 13.297 10.711 14.867 12.645 15.836L13.777 16.402L14.824 14.313C15.359 13.238 16.719 12.875 17.723 13.543L21.117 15.809C21.672 16.18 22.008 16.801 22.008 17.473L22.008 18.355C22.008 19.059 21.641 19.707 21.035 20.07L19.23 21.152C17.73 22.055 15.91 22.254 14.246 21.699C11.91 20.922 9.785 19.609 8.043 17.867Z","key":"0"}),
    createElement('path', {"d":"M18.5 2L18.5 10","key":"1"}),
    createElement('path', {"d":"M22 3.777L15 8.223","key":"2"}),
    createElement('path', {"d":"M15 3.777L22 8.223","key":"3"})
  );
});

PhoneAsterisk.displayName = 'PhoneAsterisk';

export default PhoneAsterisk;
export { PhoneAsterisk };
