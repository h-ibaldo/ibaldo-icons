import { createElement, forwardRef } from 'react';

const ArrowConvergeDownRightCircle = forwardRef(function ArrowConvergeDownRightCircle(
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
    createElement('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z","key":"0"}),
    createElement('path', {"d":"M15 6L15 9L12 9","key":"1"}),
    createElement('path', {"d":"M13 16L13 13L16 13","key":"2"}),
    createElement('path', {"d":"M9 12L9 15L6 15","key":"3"}),
    createElement('path', {"d":"M17 17L13 13","key":"4"}),
    createElement('path', {"d":"M15 9L11 5","key":"5"}),
    createElement('path', {"d":"M9 15L5 11","key":"6"})
  );
});

ArrowConvergeDownRightCircle.displayName = 'ArrowConvergeDownRightCircle';

export default ArrowConvergeDownRightCircle;
export { ArrowConvergeDownRightCircle };
