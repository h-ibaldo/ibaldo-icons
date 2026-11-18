import { createElement, forwardRef } from 'react';

const ClockDashedHalfBottom = forwardRef(function ClockDashedHalfBottom(
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
    createElement('path', {"d":"M3.66 17.406C4.402 18.531 5.367 19.492 6.488 20.234","key":"0"}),
    createElement('path', {"d":"M2.199 9.895C2.07 10.543 2 11.211 2 11.895C2 12.582 2.07 13.25 2.199 13.895","key":"1"}),
    createElement('path', {"d":"M6.488 3.555C5.367 4.297 4.402 5.262 3.66 6.383","key":"2"}),
    createElement('path', {"d":"M14 21.695C13.355 21.828 12.684 21.895 12 21.895C11.316 21.895 10.645 21.828 10 21.695","key":"3"}),
    createElement('path', {"d":"M17.512 20.234C20.215 18.445 22 15.383 22 11.895C22 6.375 17.523 1.895 12 1.895C11.316 1.895 10.648 1.965 10 2.098","key":"4"}),
    createElement('path', {"d":"M12 7L12 12L17 14","key":"5"})
  );
});

ClockDashedHalfBottom.displayName = 'ClockDashedHalfBottom';

export default ClockDashedHalfBottom;
export { ClockDashedHalfBottom };
