import { createElement, forwardRef } from 'react';

const HourglassSync = forwardRef(function HourglassSync(
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
    createElement('path', {"d":"M14.414 9.586L12 12L9.586 9.586C9.211 9.211 9 8.703 9 8.172L9 7L15 7L15 8.172C15 8.703 14.789 9.211 14.414 9.586Z","key":"0"}),
    createElement('path', {"d":"M9.586 14.414L12 12L14.414 14.414C14.789 14.789 15 15.297 15 15.828L15 17L9 17L9 15.828C9 15.297 9.211 14.789 9.586 14.414Z","key":"1"}),
    createElement('path', {"d":"M3 4L3 7L6 7","key":"2"}),
    createElement('path', {"d":"M21.25 20L21.25 17L18.25 17","key":"3"}),
    createElement('path', {"d":"M12 2C8.301 2 5.078 4.016 3.348 7","key":"4"}),
    createElement('path', {"d":"M2.051 11C2.02 11.328 2 11.66 2 12C2 17.523 6.477 22 12 22","key":"5"}),
    createElement('path', {"d":"M12 22C15.699 22 18.922 19.984 20.652 17","key":"6"}),
    createElement('path', {"d":"M21.949 13C21.98 12.672 22 12.34 22 12C22 6.477 17.523 2 12 2","key":"7"})
  );
});

HourglassSync.displayName = 'HourglassSync';

export default HourglassSync;
export { HourglassSync };
