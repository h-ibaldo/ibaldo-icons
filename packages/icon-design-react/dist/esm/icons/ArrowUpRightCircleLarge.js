import { createElement, forwardRef } from 'react';

const ArrowUpRightCircleLarge = forwardRef(function ArrowUpRightCircleLarge(
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
    createElement('path', {"d":"M19.07 19.07C22.977 15.168 22.977 8.836 19.07 4.93C15.168 1.023 8.836 1.023 4.93 4.93C1.023 8.836 1.023 15.168 4.93 19.07C8.836 22.977 15.168 22.977 19.07 19.07Z","key":"0"}),
    createElement('path', {"d":"M16 15L16 8L9 8","key":"1"}),
    createElement('path', {"d":"M9 15L16 8","key":"2"})
  );
});

ArrowUpRightCircleLarge.displayName = 'ArrowUpRightCircleLarge';

export default ArrowUpRightCircleLarge;
export { ArrowUpRightCircleLarge };
