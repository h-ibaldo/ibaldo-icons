import { createElement, forwardRef } from 'react';

const ArrowCornerLeftDown = forwardRef(function ArrowCornerLeftDown(
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
    createElement('path', {"d":"M12 17L8 21L4 17","key":"0"}),
    createElement('path', {"d":"M8 21L8 11C8 6.582 11.582 3 16 3L20 3","key":"1"})
  );
});

ArrowCornerLeftDown.displayName = 'ArrowCornerLeftDown';

export default ArrowCornerLeftDown;
export { ArrowCornerLeftDown };
