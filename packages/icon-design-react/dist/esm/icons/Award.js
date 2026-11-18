import { createElement, forwardRef } from 'react';

const Award = forwardRef(function Award(
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
    createElement('path', {"d":"M12 5.297L14.484 4L15.324 6.676L18 7.516L16.703 10L18 12.484L15.324 13.324L14.484 16L12 14.703L9.516 16L8.676 13.324L6 12.484L7.297 10L6 7.516L8.676 6.676L9.516 4Z","key":"0"}),
    createElement('path', {"d":"M13.473 15.473L18 20L19 17L22 16L17.473 11.473","key":"1"}),
    createElement('path', {"d":"M6.527 11.473L2 16L5 17L6 20L10.527 15.473","key":"2"})
  );
});

Award.displayName = 'Award';

export default Award;
export { Award };
