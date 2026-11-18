import { createElement, forwardRef } from 'react';

const ChevronDownLeftSmall = forwardRef(function ChevronDownLeftSmall(
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
    createElement('path', {"d":"M10 9L10 14L15 14","key":"0"})
  );
});

ChevronDownLeftSmall.displayName = 'ChevronDownLeftSmall';

export default ChevronDownLeftSmall;
export { ChevronDownLeftSmall };
