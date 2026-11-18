import { createElement, forwardRef } from 'react';

const ArrowConvergeDownCircle = forwardRef(function ArrowConvergeDownCircle(
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
    createElement('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z","key":"0"}),
    createElement('path', {"d":"M6 10L8 12L10 10","key":"1"}),
    createElement('path', {"d":"M10 16L12 14L14 16","key":"2"}),
    createElement('path', {"d":"M14 10L16 12L18 10","key":"3"}),
    createElement('path', {"d":"M12 19L12 14","key":"4"}),
    createElement('path', {"d":"M8 12L8 7","key":"5"}),
    createElement('path', {"d":"M16 12L16 7","key":"6"})
  );
});

ArrowConvergeDownCircle.displayName = 'ArrowConvergeDownCircle';

export default ArrowConvergeDownCircle;
export { ArrowConvergeDownCircle };
