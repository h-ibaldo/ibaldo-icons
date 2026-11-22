import { createElement, forwardRef } from 'react';

const DistributeBottom = forwardRef(function DistributeBottom(
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
    createElement('path', {"d":"M2 21L22 21","key":"0"}),
    createElement('path', {"d":"M2 9L22 9","key":"1"}),
    createElement('path', {"d":"M8 8L8 4C8 3.449 8.449 3 9 3L15 3C15.551 3 16 3.449 16 4L16 8C16 8.551 15.551 9 15 9L9 9C8.449 9 8 8.551 8 8Z","key":"2"}),
    createElement('path', {"d":"M6 20L6 16C6 15.449 6.449 15 7 15L17 15C17.551 15 18 15.449 18 16L18 20C18 20.551 17.551 21 17 21L7 21C6.449 21 6 20.551 6 20Z","key":"3"})
  );
});

DistributeBottom.displayName = 'DistributeBottom';

export default DistributeBottom;
export { DistributeBottom };
