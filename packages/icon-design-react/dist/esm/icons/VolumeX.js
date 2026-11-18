import { createElement, forwardRef } from 'react';

const VolumeX = forwardRef(function VolumeX(
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
    createElement('path', {"d":"M17 5L17 3.867C17 3.07 16.109 2.594 15.445 3.035L8 8L4 8C3.449 8 3 8.445 3 9L3 15C3 15.555 3.449 16 4 16L8 16L15.445 20.965C16.109 21.406 17 20.93 17 20.133L17 19","key":"0"}),
    createElement('path', {"d":"M21 9L15 15.25","key":"1"}),
    createElement('path', {"d":"M15 9L21 15.25","key":"2"})
  );
});

VolumeX.displayName = 'VolumeX';

export default VolumeX;
export { VolumeX };
