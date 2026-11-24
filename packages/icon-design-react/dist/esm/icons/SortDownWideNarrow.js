import { createElement, forwardRef } from 'react';

const SortDownWideNarrow = forwardRef(function SortDownWideNarrow(
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
    createElement('path', {"d":"M7 2L7 22","key":"0"}),
    createElement('path', {"d":"M22 2L11 2","key":"1"}),
    createElement('path', {"d":"M19 7L11 7","key":"2"}),
    createElement('path', {"d":"M16 12L11 12","key":"3"}),
    createElement('path', {"d":"M2 17L7 22L12 17","key":"4"})
  );
});

SortDownWideNarrow.displayName = 'SortDownWideNarrow';

export default SortDownWideNarrow;
export { SortDownWideNarrow };
