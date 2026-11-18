import { createElement, forwardRef } from 'react';

const ClockThreeSquared = forwardRef(function ClockThreeSquared(
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
    createElement('path', {"d":"M20 21L4 21C3.449 21 3 20.555 3 20L3 4C3 3.449 3.449 3 4 3L20 3C20.551 3 21 3.449 21 4L21 20C21 20.555 20.551 21 20 21Z","key":"0"}),
    createElement('path', {"d":"M12 12C13.105 12 14 12.895 14 14C14 15.105 13.105 16 12 16C11.262 16 10.625 15.598 10.277 15","key":"1"}),
    createElement('path', {"d":"M10 9L14 9L12 12","key":"2"}),
    createElement('path', {"d":"M12 5L12 3","key":"3"}),
    createElement('path', {"d":"M12 21L12 19","key":"4"}),
    createElement('path', {"d":"M19 12L21 12","key":"5"}),
    createElement('path', {"d":"M3 12L5 12","key":"6"})
  );
});

ClockThreeSquared.displayName = 'ClockThreeSquared';

export default ClockThreeSquared;
export { ClockThreeSquared };
