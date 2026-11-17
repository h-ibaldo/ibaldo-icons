import { createElement, forwardRef } from 'react';

const PlusSquareDot = forwardRef(function PlusSquareDot(
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
    createElement('path', {"d":"M12 9L12 15","key":"0"}),
    createElement('path', {"d":"M15 12L9 12","key":"1"}),
    createElement('path', {"d":"M20 11L20 18C20 19.656 18.656 21 17 21L7 21C5.344 21 4 19.656 4 18L4 6C4 4.344 5.344 3 7 3L12 3","key":"2"}),
    createElement('path', {"d":"M21 4.5C21 3.117 19.883 2 18.5 2C17.117 2 16 3.117 16 4.5C16 5.883 17.117 7 18.5 7C19.883 7 21 5.883 21 4.5Z","key":"3"})
  );
});

PlusSquareDot.displayName = 'PlusSquareDot';

export default PlusSquareDot;
export { PlusSquareDot };
