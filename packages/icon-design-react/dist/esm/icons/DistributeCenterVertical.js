import { createElement, forwardRef } from 'react';

const DistributeCenterVertical = forwardRef(function DistributeCenterVertical(
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
    createElement('path', {"d":"M18 7L22 7","key":"0"}),
    createElement('path', {"d":"M2 7L6 7","key":"1"}),
    createElement('path', {"d":"M18 5L18 9C18 9.551 17.551 10 17 10L7 10C6.449 10 6 9.551 6 9L6 5C6 4.449 6.449 4 7 4L17 4C17.551 4 18 4.449 18 5Z","key":"2"}),
    createElement('path', {"d":"M16 17L20 17","key":"3"}),
    createElement('path', {"d":"M4 17L8 17","key":"4"}),
    createElement('path', {"d":"M16 15L16 19C16 19.551 15.551 20 15 20L9 20C8.449 20 8 19.551 8 19L8 15C8 14.449 8.449 14 9 14L15 14C15.551 14 16 14.449 16 15Z","key":"5"})
  );
});

DistributeCenterVertical.displayName = 'DistributeCenterVertical';

export default DistributeCenterVertical;
export { DistributeCenterVertical };
