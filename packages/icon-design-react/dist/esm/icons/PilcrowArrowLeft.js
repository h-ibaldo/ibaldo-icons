import { createElement, forwardRef } from 'react';

const PilcrowArrowLeft = forwardRef(function PilcrowArrowLeft(
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
    createElement('path', {"d":"M12 14L12 2L10.5 2C8.566 2 7 3.566 7 5.5C7 7.434 8.566 9 10.5 9L12 9","key":"0"}),
    createElement('path', {"d":"M16 2L16 14.102","key":"1"}),
    createElement('path', {"d":"M22 18L2 18","key":"2"}),
    createElement('path', {"d":"M6 14L2 18L6 22","key":"3"})
  );
});

PilcrowArrowLeft.displayName = 'PilcrowArrowLeft';

export default PilcrowArrowLeft;
export { PilcrowArrowLeft };
