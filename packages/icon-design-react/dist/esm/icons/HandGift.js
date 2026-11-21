import { createElement, forwardRef } from 'react';

const HandGift = forwardRef(function HandGift(
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
    createElement('path', {"d":"M4 14L7.777 12.473C8.523 12.168 9.359 12.18 10.098 12.5L14.371 14.352C15.219 14.719 15.645 15.672 15.355 16.547C15.078 17.383 14.234 17.891 13.367 17.746L8.945 17","key":"0"}),
    createElement('path', {"d":"M4 21L6.633 20.664L11.246 21.832C14.027 22.535 16.949 21.43 18.594 19.055L21.648 14.641C22.273 13.738 22.043 12.5 21.137 11.891C20.371 11.371 19.348 11.477 18.699 12.133L15.375 15.492","key":"1"}),
    createElement('path', {"d":"M2 12L4 12L4 22L2 22","key":"2"}),
    createElement('path', {"d":"M5 6L19 6L19 9L5 9Z","key":"3"}),
    createElement('path', {"d":"M6 13.191L6 9","key":"4"}),
    createElement('path', {"d":"M18 9L18 12.84","key":"5"}),
    createElement('path', {"d":"M9 2L9.5 2C10.883 2 12 3.121 12 4.5L12 6L9 6C7.895 6 7 5.105 7 4C7 2.895 7.895 2 9 2Z","key":"6"}),
    createElement('path', {"d":"M15 2L14.5 2C13.117 2 12 3.121 12 4.5L12 6L15 6C16.105 6 17 5.105 17 4C17 2.895 16.105 2 15 2Z","key":"7"}),
    createElement('path', {"d":"M12 6L12 13","key":"8"})
  );
});

HandGift.displayName = 'HandGift';

export default HandGift;
export { HandGift };
