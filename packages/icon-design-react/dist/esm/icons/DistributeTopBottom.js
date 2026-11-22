import { createElement, forwardRef } from 'react';

const DistributeTopBottom = forwardRef(function DistributeTopBottom(
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
    createElement('path', {"d":"M22 3L2 3","key":"0"}),
    createElement('path', {"d":"M2 21L22 21","key":"1"}),
    createElement('path', {"d":"M8 20L8 16C8 15.449 8.449 15 9 15L15 15C15.551 15 16 15.449 16 16L16 20C16 20.551 15.551 21 15 21L9 21C8.449 21 8 20.551 8 20Z","key":"2"}),
    createElement('path', {"d":"M18 4L18 8C18 8.551 17.551 9 17 9L7 9C6.449 9 6 8.551 6 8L6 4C6 3.449 6.449 3 7 3L17 3C17.551 3 18 3.449 18 4Z","key":"3"})
  );
});

DistributeTopBottom.displayName = 'DistributeTopBottom';

export default DistributeTopBottom;
export { DistributeTopBottom };
