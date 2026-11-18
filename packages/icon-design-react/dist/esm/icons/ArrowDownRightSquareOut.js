import { createElement, forwardRef } from 'react';

const ArrowDownRightSquareOut = forwardRef(function ArrowDownRightSquareOut(
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
    createElement('path', {"d":"M15 21L21 21L21 15","key":"0"}),
    createElement('path', {"d":"M13 13L21 21","key":"1"}),
    createElement('path', {"d":"M11.004 17.98L5.004 17.98C3.898 17.98 3.004 17.082 3.004 15.98L3.004 4.98C3.004 3.875 3.898 2.98 5.004 2.98L16.004 2.98C17.109 2.98 18.004 3.875 18.004 4.98L18.004 10.98","key":"2"})
  );
});

ArrowDownRightSquareOut.displayName = 'ArrowDownRightSquareOut';

export default ArrowDownRightSquareOut;
export { ArrowDownRightSquareOut };
