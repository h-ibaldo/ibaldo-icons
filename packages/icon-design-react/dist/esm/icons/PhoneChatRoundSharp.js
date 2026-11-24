import { createElement, forwardRef } from 'react';

const PhoneChatRoundSharp = forwardRef(function PhoneChatRoundSharp(
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
    createElement('path', {"d":"M6.41 10.297L6.449 10.398C7.613 13.742 10.258 16.359 13.609 17.492","key":"0"}),
    createElement('path', {"d":"M13.695 14.793L15.406 13.895L19.906 16.594L19.246 19.887C19.094 20.648 18.602 21.293 17.906 21.641C17.449 21.867 16.934 21.953 16.43 21.879L14.961 21.668C12.309 21.289 9.805 20.207 7.715 18.535C6.848 17.844 6.063 17.055 5.371 16.191C3.695 14.098 2.613 11.598 2.234 8.941L2.023 7.477C1.953 6.969 2.035 6.453 2.266 5.996C2.609 5.305 3.258 4.813 4.016 4.66L7.313 4L10.012 8.496L9.195 9.398","key":"1"}),
    createElement('path', {"d":"M14 2L21 2C21.551 2 22 2.449 22 3L22 7C22 7.551 21.551 8 21 8L18.547 8L15 11L15 8L14 8C13.449 8 13 7.551 13 7L13 3C13 2.449 13.449 2 14 2Z","key":"2"})
  );
});

PhoneChatRoundSharp.displayName = 'PhoneChatRoundSharp';

export default PhoneChatRoundSharp;
export { PhoneChatRoundSharp };
