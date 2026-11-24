import { createElement, forwardRef } from 'react';

const UsbStick = forwardRef(function UsbStick(
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
    createElement('path', {"d":"M15 7L22 7L22 17L15 17","key":"0"}),
    createElement('path', {"d":"M19 10L18 10","key":"1"}),
    createElement('path', {"d":"M19 14L18 14","key":"2"}),
    createElement('path', {"d":"M7 6L15 6L15 18L7 18C4.238 18 2 15.762 2 13L2 11C2 8.238 4.238 6 7 6Z","key":"3"}),
    createElement('path', {"d":"M19 10L18 10","key":"4"}),
    createElement('path', {"d":"M19 14L18 14","key":"5"})
  );
});

UsbStick.displayName = 'UsbStick';

export default UsbStick;
export { UsbStick };
