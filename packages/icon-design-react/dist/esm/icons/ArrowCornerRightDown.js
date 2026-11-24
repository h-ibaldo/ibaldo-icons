import { createElement, forwardRef } from 'react';

const ArrowCornerRightDown = forwardRef(function ArrowCornerRightDown(
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
    createElement('path', {"d":"M12 17L16 21L20 17","key":"0"}),
    createElement('path', {"d":"M16 21L16 11C16 6.582 12.418 3 8 3L4 3","key":"1"})
  );
});

ArrowCornerRightDown.displayName = 'ArrowCornerRightDown';

export default ArrowCornerRightDown;
export { ArrowCornerRightDown };
