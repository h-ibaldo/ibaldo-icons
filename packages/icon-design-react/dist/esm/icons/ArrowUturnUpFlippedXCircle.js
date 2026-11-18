import { createElement, forwardRef } from 'react';

const ArrowUturnUpFlippedXCircle = forwardRef(function ArrowUturnUpFlippedXCircle(
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
    createElement('path', {"d":"M2 12L5 9L8 12","key":"0"}),
    createElement('path', {"d":"M22 7.5C22 4.461 19.539 2 16.5 2C13.461 2 11 4.461 11 7.5C11 10.539 13.461 13 16.5 13C19.539 13 22 10.539 22 7.5Z","key":"1"}),
    createElement('path', {"d":"M16.91 17C16.434 19.836 13.973 22 11 22C7.688 22 5 19.313 5 16L5 9","key":"2"}),
    createElement('path', {"d":"M15 9L18 6","key":"3"}),
    createElement('path', {"d":"M15 6L18 9","key":"4"})
  );
});

ArrowUturnUpFlippedXCircle.displayName = 'ArrowUturnUpFlippedXCircle';

export default ArrowUturnUpFlippedXCircle;
export { ArrowUturnUpFlippedXCircle };
