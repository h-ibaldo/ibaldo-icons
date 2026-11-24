import { createElement, forwardRef } from 'react';

const ArrowRightNarrow = forwardRef(function ArrowRightNarrow(
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
    createElement('path', {"d":"M15 7L20 12L15 17","key":"0"}),
    createElement('path', {"d":"M4 12L20 12","key":"1"})
  );
});

ArrowRightNarrow.displayName = 'ArrowRightNarrow';

export default ArrowRightNarrow;
export { ArrowRightNarrow };
