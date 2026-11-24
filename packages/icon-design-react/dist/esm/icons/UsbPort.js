import { createElement, forwardRef } from 'react';

const UsbPort = forwardRef(function UsbPort(
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
    createElement('path', {"d":"M5 9L19 9C20.656 9 22 10.344 22 12C22 13.656 20.656 15 19 15L5 15C3.344 15 2 13.656 2 12C2 10.344 3.344 9 5 9Z","key":"0"}),
    createElement('path', {"d":"M6 12L18 12","key":"1"})
  );
});

UsbPort.displayName = 'UsbPort';

export default UsbPort;
export { UsbPort };
