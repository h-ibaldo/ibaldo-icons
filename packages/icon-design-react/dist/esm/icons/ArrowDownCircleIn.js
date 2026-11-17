import { createElement, forwardRef } from 'react';

const ArrowDownCircleIn = forwardRef(function ArrowDownCircleIn(
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
    createElement('path', {"d":"M9 12L12 15L15 12","key":"0"}),
    createElement('path', {"d":"M12 2L12 15","key":"1"}),
    createElement('path', {"d":"M17 3.352C19.984 5.082 22 8.301 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 8.301 4.016 5.082 7 3.352","key":"2"})
  );
});

ArrowDownCircleIn.displayName = 'ArrowDownCircleIn';

export default ArrowDownCircleIn;
export { ArrowDownCircleIn };
