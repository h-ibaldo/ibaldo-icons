import { createElement, forwardRef } from 'react';

const ArrowCounterclockwiseDottedChevron = forwardRef(function ArrowCounterclockwiseDottedChevron(
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
    createElement('path', {"d":"M7 2L4 5L7 8","key":"0"}),
    createElement('path', {"d":"M12 5C16.418 5 20 8.582 20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13","key":"1"}),
    createElement('path', {"d":"M4 5L12 5","key":"2"}),
    createElement('path', {"d":"M12 13L12 13","key":"3"}),
    createElement('path', {"d":"M12 9L12 9","key":"4"}),
    createElement('path', {"d":"M12 17L12 17","key":"5"}),
    createElement('path', {"d":"M8.535 11L8.535 11","key":"6"}),
    createElement('path', {"d":"M15.465 15L15.465 15","key":"7"}),
    createElement('path', {"d":"M8.535 15L8.535 15","key":"8"}),
    createElement('path', {"d":"M15.465 11L15.465 11","key":"9"})
  );
});

ArrowCounterclockwiseDottedChevron.displayName = 'ArrowCounterclockwiseDottedChevron';

export default ArrowCounterclockwiseDottedChevron;
export { ArrowCounterclockwiseDottedChevron };
