import { createElement, forwardRef } from 'react';

const PulseSquare = forwardRef(function PulseSquare(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M2 12L7 12L10 7L14 17L17 12L22 12","key":"1"})
  );
});

PulseSquare.displayName = 'PulseSquare';

export default PulseSquare;
export { PulseSquare };
