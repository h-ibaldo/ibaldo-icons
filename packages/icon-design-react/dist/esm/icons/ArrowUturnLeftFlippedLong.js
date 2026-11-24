import { createElement, forwardRef } from 'react';

const ArrowUturnLeftFlippedLong = forwardRef(function ArrowUturnLeftFlippedLong(
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
    createElement('path', {"d":"M7 12L3 16L7 20","key":"0"}),
    createElement('path', {"d":"M3 16L15 16C18.313 16 21 13.313 21 10C21 6.688 18.313 4 15 4L4 4","key":"1"})
  );
});

ArrowUturnLeftFlippedLong.displayName = 'ArrowUturnLeftFlippedLong';

export default ArrowUturnLeftFlippedLong;
export { ArrowUturnLeftFlippedLong };
