import { createElement, forwardRef } from 'react';

const Bluetooth = forwardRef(function Bluetooth(
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
    createElement('path', {"d":"M12 2L12 22","key":"0"}),
    createElement('path', {"d":"M5.5 18L18.5 6","key":"1"}),
    createElement('path', {"d":"M5.5 6L18.5 18","key":"2"}),
    createElement('path', {"d":"M12 2L18.5 6","key":"3"}),
    createElement('path', {"d":"M18.5 18L12 22","key":"4"})
  );
});

Bluetooth.displayName = 'Bluetooth';

export default Bluetooth;
export { Bluetooth };
