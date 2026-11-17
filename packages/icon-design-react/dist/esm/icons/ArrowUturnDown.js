import { createElement, forwardRef } from 'react';

const ArrowUturnDown = forwardRef(function ArrowUturnDown(
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
    createElement('path', {"d":"M16 21L16 9C16 5.688 13.313 3 10 3C6.688 3 4 5.688 4 9L4 12","key":"1"})
  );
});

ArrowUturnDown.displayName = 'ArrowUturnDown';

export default ArrowUturnDown;
export { ArrowUturnDown };
