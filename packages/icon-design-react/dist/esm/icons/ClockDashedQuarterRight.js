import { createElement, forwardRef } from 'react';

const ClockDashedQuarterRight = forwardRef(function ClockDashedQuarterRight(
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
    createElement('path', {"d":"M19.648 5.563C19.277 5.125 18.875 4.719 18.438 4.352","key":"0"}),
    createElement('path', {"d":"M15.402 2.605C14.871 2.414 14.32 2.262 13.75 2.164","key":"1"}),
    createElement('path', {"d":"M21.836 10.25C21.738 9.68 21.586 9.129 21.395 8.598","key":"2"}),
    createElement('path', {"d":"M10.25 2.164C5.563 2.992 2 7.074 2 12C2 17.523 6.477 22 12 22C16.926 22 21.008 18.438 21.836 13.75","key":"3"}),
    createElement('path', {"d":"M12 7L12 12L17 12","key":"4"})
  );
});

ClockDashedQuarterRight.displayName = 'ClockDashedQuarterRight';

export default ClockDashedQuarterRight;
export { ClockDashedQuarterRight };
