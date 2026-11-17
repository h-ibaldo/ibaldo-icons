import { createElement, forwardRef } from 'react';

const PointerClockStraight = forwardRef(function PointerClockStraight(
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
    createElement('path', {"d":"M2 6.547L2 20.738C2 21.609 3.031 22.063 3.672 21.48L7.5 18L12.707 18C13.578 18 14.035 16.957 13.438 16.32L3.734 5.867C3.113 5.199 2 5.637 2 6.547Z","key":"0"}),
    createElement('path', {"d":"M22 7C22 9.762 19.762 12 17 12C14.238 12 12 9.762 12 7C12 4.238 14.238 2 17 2C19.762 2 22 4.238 22 7Z","key":"1"}),
    createElement('path', {"d":"M17 5L17 7L19 7","key":"2"})
  );
});

PointerClockStraight.displayName = 'PointerClockStraight';

export default PointerClockStraight;
export { PointerClockStraight };
