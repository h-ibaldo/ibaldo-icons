import { createElement, forwardRef } from 'react';

const ClockCircleDashed = forwardRef(function ClockCircleDashed(
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
    createElement('path', {"d":"M3.66 17.512C4.402 18.633 5.367 19.598 6.488 20.34","key":"0"}),
    createElement('path', {"d":"M2.199 10C2.07 10.645 2 11.316 2 12C2 12.684 2.07 13.355 2.199 14","key":"1"}),
    createElement('path', {"d":"M6.488 3.66C5.367 4.402 4.402 5.367 3.66 6.488","key":"2"}),
    createElement('path', {"d":"M10 21.797C10.645 21.93 11.316 22 12 22C12.344 22 12.68 21.984 13.016 21.949C18.063 21.441 22 17.18 22 12C22 6.82 18.063 2.559 13.016 2.051C12.68 2.02 12.344 2 12 2C11.316 2 10.645 2.07 10 2.199","key":"3"}),
    createElement('path', {"d":"M18 12C18 8.688 15.313 6 12 6C8.688 6 6 8.688 6 12C6 15.313 8.688 18 12 18C15.313 18 18 15.313 18 12Z","key":"4"}),
    createElement('path', {"d":"M12 10L12 12L14 13","key":"5"})
  );
});

ClockCircleDashed.displayName = 'ClockCircleDashed';

export default ClockCircleDashed;
export { ClockCircleDashed };
