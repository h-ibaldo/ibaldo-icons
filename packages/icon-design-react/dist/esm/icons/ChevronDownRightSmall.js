import { createElement, forwardRef } from 'react';

const ChevronDownRightSmall = forwardRef(function ChevronDownRightSmall(
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
    createElement('path', {"d":"M14 9L14 14L9 14","key":"0"})
  );
});

ChevronDownRightSmall.displayName = 'ChevronDownRightSmall';

export default ChevronDownRightSmall;
export { ChevronDownRightSmall };
