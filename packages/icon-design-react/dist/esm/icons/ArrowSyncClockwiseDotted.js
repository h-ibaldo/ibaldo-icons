import { createElement, forwardRef } from 'react';

const ArrowSyncClockwiseDotted = forwardRef(function ArrowSyncClockwiseDotted(
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
    createElement('path', {"d":"M12 4L12 4","key":"0"}),
    createElement('path', {"d":"M12 4L12 4","key":"1"}),
    createElement('path', {"d":"M8.492 4.809L8.492 4.809","key":"2"}),
    createElement('path', {"d":"M5.695 7.074L5.695 7.074","key":"3"}),
    createElement('path', {"d":"M15.254 4.691L15.254 4.691","key":"4"}),
    createElement('path', {"d":"M22 11L20 13L18 11","key":"5"}),
    createElement('path', {"d":"M20 12C20 8.742 18.047 5.941 15.25 4.695","key":"6"}),
    createElement('path', {"d":"M12 20L12 20","key":"7"}),
    createElement('path', {"d":"M12 20L12 20","key":"8"}),
    createElement('path', {"d":"M15.508 19.191L15.508 19.191","key":"9"}),
    createElement('path', {"d":"M18.305 16.926L18.305 16.926","key":"10"}),
    createElement('path', {"d":"M8.746 19.309L8.746 19.309","key":"11"}),
    createElement('path', {"d":"M2 13L4 11L6 13","key":"12"}),
    createElement('path', {"d":"M4 12C4 15.258 5.953 18.059 8.75 19.305","key":"13"})
  );
});

ArrowSyncClockwiseDotted.displayName = 'ArrowSyncClockwiseDotted';

export default ArrowSyncClockwiseDotted;
export { ArrowSyncClockwiseDotted };
