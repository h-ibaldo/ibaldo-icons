import { createElement, forwardRef } from 'react';

const ClockSquared = forwardRef(function ClockSquared(
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
    createElement('path', {"d":"M18 21L6 21C4.344 21 3 19.656 3 18L3 6C3 4.344 4.344 3 6 3L18 3C19.656 3 21 4.344 21 6L21 18C21 19.656 19.656 21 18 21Z","key":"0"}),
    createElement('path', {"d":"M12 7L12 12L16 12","key":"1"})
  );
});

ClockSquared.displayName = 'ClockSquared';

export default ClockSquared;
export { ClockSquared };
