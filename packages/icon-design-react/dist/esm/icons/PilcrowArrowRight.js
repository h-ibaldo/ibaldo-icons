import { createElement, forwardRef } from 'react';

const PilcrowArrowRight = forwardRef(function PilcrowArrowRight(
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
    createElement('path', {"d":"M10 14L10 2L8.5 2C6.566 2 5 3.566 5 5.5C5 7.434 6.566 9 8.5 9L10 9","key":"0"}),
    createElement('path', {"d":"M14 2L14 14.102","key":"1"}),
    createElement('path', {"d":"M2 18L22 18","key":"2"}),
    createElement('path', {"d":"M18 22L22 18L18 14","key":"3"})
  );
});

PilcrowArrowRight.displayName = 'PilcrowArrowRight';

export default PilcrowArrowRight;
export { PilcrowArrowRight };
