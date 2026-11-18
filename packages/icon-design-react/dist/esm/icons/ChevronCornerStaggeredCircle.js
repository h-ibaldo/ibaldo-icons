import { createElement, forwardRef } from 'react';

const ChevronCornerStaggeredCircle = forwardRef(function ChevronCornerStaggeredCircle(
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
    createElement('path', {"d":"M14 7L14 10L11 10","key":"1"}),
    createElement('path', {"d":"M10 17L10 14L13 14","key":"2"})
  );
});

ChevronCornerStaggeredCircle.displayName = 'ChevronCornerStaggeredCircle';

export default ChevronCornerStaggeredCircle;
export { ChevronCornerStaggeredCircle };
