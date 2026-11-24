import { createElement, forwardRef } from 'react';

const DistributeRight = forwardRef(function DistributeRight(
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
    createElement('path', {"d":"M21 22L21 2","key":"0"}),
    createElement('path', {"d":"M9 22L9 2","key":"1"}),
    createElement('path', {"d":"M8 16L4 16C3.449 16 3 15.551 3 15L3 9C3 8.449 3.449 8 4 8L8 8C8.551 8 9 8.449 9 9L9 15C9 15.551 8.551 16 8 16Z","key":"2"}),
    createElement('path', {"d":"M20 18L16 18C15.449 18 15 17.551 15 17L15 7C15 6.449 15.449 6 16 6L20 6C20.551 6 21 6.449 21 7L21 17C21 17.551 20.551 18 20 18Z","key":"3"})
  );
});

DistributeRight.displayName = 'DistributeRight';

export default DistributeRight;
export { DistributeRight };
