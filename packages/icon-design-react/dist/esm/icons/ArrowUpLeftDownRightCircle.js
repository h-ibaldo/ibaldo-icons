import { createElement, forwardRef } from 'react';

const ArrowUpLeftDownRightCircle = forwardRef(function ArrowUpLeftDownRightCircle(
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
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z","key":"0"}),
    createElement('path', {"d":"M17 9L17 12L14 12","key":"1"}),
    createElement('path', {"d":"M12 7L17 12","key":"2"}),
    createElement('path', {"d":"M7 15L7 12L10 12","key":"3"}),
    createElement('path', {"d":"M12 17L7 12","key":"4"})
  );
});

ArrowUpLeftDownRightCircle.displayName = 'ArrowUpLeftDownRightCircle';

export default ArrowUpLeftDownRightCircle;
export { ArrowUpLeftDownRightCircle };
