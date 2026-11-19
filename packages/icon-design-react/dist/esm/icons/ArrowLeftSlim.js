import { createElement, forwardRef } from 'react';

const ArrowLeftSlim = forwardRef(function ArrowLeftSlim(
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
    createElement('path', {"d":"M7 9L4 12L7 15","key":"0"}),
    createElement('path', {"d":"M20 12L4 12","key":"1"})
  );
});

ArrowLeftSlim.displayName = 'ArrowLeftSlim';

export default ArrowLeftSlim;
export { ArrowLeftSlim };
