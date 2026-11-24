import { createElement, forwardRef } from 'react';

const ArrowUpLeftSquareIn = forwardRef(function ArrowUpLeftSquareIn(
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
    createElement('path', {"d":"M21.004 9.98L21.004 4.98C21.004 3.875 20.109 2.98 19.004 2.98L5.004 2.98C3.898 2.98 3.004 3.875 3.004 4.98L3.004 18.98C3.004 20.082 3.898 20.98 5.004 20.98L10.004 20.98","key":"0"}),
    createElement('path', {"d":"M16.004 9.98L10.004 9.98L10.004 15.98","key":"1"}),
    createElement('path', {"d":"M11.004 10.98L19.004 18.98","key":"2"})
  );
});

ArrowUpLeftSquareIn.displayName = 'ArrowUpLeftSquareIn';

export default ArrowUpLeftSquareIn;
export { ArrowUpLeftSquareIn };
