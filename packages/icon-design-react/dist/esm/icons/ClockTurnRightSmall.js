import { createElement, forwardRef } from 'react';

const ClockTurnRightSmall = forwardRef(function ClockTurnRightSmall(
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
    createElement('path', {"d":"M18 2L21 5L18 8","key":"0"}),
    createElement('path', {"d":"M11 5C6.582 5 3 8.582 3 13C3 17.418 6.582 21 11 21C15.418 21 19 17.418 19 13","key":"1"}),
    createElement('path', {"d":"M11 9L11 13L15 13","key":"2"}),
    createElement('path', {"d":"M21 5L11 5","key":"3"})
  );
});

ClockTurnRightSmall.displayName = 'ClockTurnRightSmall';

export default ClockTurnRightSmall;
export { ClockTurnRightSmall };
