import { createElement, forwardRef } from 'react';

const StopwatchDots = forwardRef(function StopwatchDots(
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
    createElement('path', {"d":"M20.5 13.5C20.5 8.805 16.695 5 12 5C7.305 5 3.5 8.805 3.5 13.5C3.5 18.195 7.305 22 12 22C16.695 22 20.5 18.195 20.5 13.5Z","key":"0"}),
    createElement('path', {"d":"M9 2L15 2","key":"1"}),
    createElement('path', {"d":"M12 9L12 9","key":"2"}),
    createElement('path', {"d":"M12 18L12 18","key":"3"}),
    createElement('path', {"d":"M16.5 13.5L16.5 13.5","key":"4"}),
    createElement('path', {"d":"M7.5 13.5L7.5 13.5","key":"5"}),
    createElement('path', {"d":"M15.184 10.32L15.184 10.32","key":"6"}),
    createElement('path', {"d":"M8.816 16.68L8.816 16.68","key":"7"}),
    createElement('path', {"d":"M15.184 16.68L15.184 16.68","key":"8"}),
    createElement('path', {"d":"M8.816 10.32L8.816 10.32","key":"9"})
  );
});

StopwatchDots.displayName = 'StopwatchDots';

export default StopwatchDots;
export { StopwatchDots };
