import { createElement, forwardRef } from 'react';

const ArrowCounterclockwiseFifteenDoubleChevron = forwardRef(function ArrowCounterclockwiseFifteenDoubleChevron(
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
    createElement('path', {"d":"M6 2L4 4L6 6","key":"0"}),
    createElement('path', {"d":"M11 2L9 4L11 6","key":"1"}),
    createElement('path', {"d":"M12 4C16.973 4 21 8.027 21 13C21 17.973 16.973 22 12 22C7.027 22 3 17.973 3 13C3 11.945 3.191 10.938 3.523 10","key":"2"}),
    createElement('path', {"d":"M12 4L9 4","key":"3"}),
    createElement('path', {"d":"M8 10L9 10L9 17","key":"4"}),
    createElement('path', {"d":"M16 10L13 10L13 13L14 13C15.105 13 16 13.895 16 15C16 16.105 15.105 17 14 17L13 17","key":"5"})
  );
});

ArrowCounterclockwiseFifteenDoubleChevron.displayName = 'ArrowCounterclockwiseFifteenDoubleChevron';

export default ArrowCounterclockwiseFifteenDoubleChevron;
export { ArrowCounterclockwiseFifteenDoubleChevron };
