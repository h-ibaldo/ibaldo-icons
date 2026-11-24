import { createElement, forwardRef } from 'react';

const ChevronDownSmall = forwardRef(function ChevronDownSmall(
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
    createElement('path', {"d":"M9 11L12 14L15 11","key":"0"})
  );
});

ChevronDownSmall.displayName = 'ChevronDownSmall';

export default ChevronDownSmall;
export { ChevronDownSmall };
