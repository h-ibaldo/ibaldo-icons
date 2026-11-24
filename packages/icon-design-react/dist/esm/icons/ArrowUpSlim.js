import { createElement, forwardRef } from 'react';

const ArrowUpSlim = forwardRef(function ArrowUpSlim(
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
    createElement('path', {"d":"M9 7L12 4L15 7","key":"0"}),
    createElement('path', {"d":"M12 4L12 20","key":"1"})
  );
});

ArrowUpSlim.displayName = 'ArrowUpSlim';

export default ArrowUpSlim;
export { ArrowUpSlim };
