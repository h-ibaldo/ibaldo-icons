import { createElement, forwardRef } from 'react';

const StopwatchNeedleArcRight = forwardRef(function StopwatchNeedleArcRight(
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
    createElement('path', {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z","key":"0"}),
    createElement('path', {"d":"M10 2L14 2","key":"1"}),
    createElement('path', {"d":"M12 17L12 13","key":"2"}),
    createElement('path', {"d":"M20 5L22 7","key":"3"}),
    createElement('path', {"d":"M21 6L18.563 8.434","key":"4"}),
    createElement('path', {"d":"M12.5 13C12.5 13.277 12.277 13.5 12 13.5C11.723 13.5 11.5 13.277 11.5 13C11.5 12.723 11.723 12.5 12 12.5C12.277 12.5 12.5 12.723 12.5 13Z","key":"5"}),
    createElement('path', {"d":"M15.215 16.82C16.301 15.902 17 14.535 17 13C17 10.582 15.281 8.563 13 8.102","key":"6"})
  );
});

StopwatchNeedleArcRight.displayName = 'StopwatchNeedleArcRight';

export default StopwatchNeedleArcRight;
export { StopwatchNeedleArcRight };
