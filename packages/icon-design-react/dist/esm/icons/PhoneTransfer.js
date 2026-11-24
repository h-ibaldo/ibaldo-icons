import { createElement, forwardRef } from 'react';

const PhoneTransfer = forwardRef(function PhoneTransfer(
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
    createElement('path', {"d":"M10.387 15.816L8.191 13.621C6.895 12.324 5.918 10.742 5.336 9.004C4.785 7.344 4.984 5.52 5.887 4.02L6.516 2.973C6.875 2.367 7.527 2 8.23 2L8.656 2C9.328 2 9.949 2.336 10.32 2.891L11.98 5.379C12.648 6.379 12.285 7.738 11.211 8.277L9.727 9.016L9.992 9.543C10.961 11.48 12.527 13.047 14.465 14.016L14.992 14.281L15.73 12.797C16.27 11.723 17.629 11.359 18.629 12.027L21.117 13.688C21.672 14.059 22.008 14.684 22.008 15.352L22.008 15.777C22.008 16.48 21.641 17.133 21.035 17.492L19.988 18.125C18.488 19.023 16.664 19.223 15.004 18.672C13.266 18.09 11.684 17.113 10.387 15.816Z","key":"0"}),
    createElement('path', {"d":"M16 5L22.441 5","key":"1"}),
    createElement('path', {"d":"M8.441 19L2 19","key":"2"}),
    createElement('path', {"d":"M19.441 2L22.441 5L19.441 8","key":"3"}),
    createElement('path', {"d":"M5 22L2 19L5 16","key":"4"})
  );
});

PhoneTransfer.displayName = 'PhoneTransfer';

export default PhoneTransfer;
export { PhoneTransfer };
