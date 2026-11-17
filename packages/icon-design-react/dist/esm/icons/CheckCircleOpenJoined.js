import { createElement, forwardRef } from 'react';

const CheckCircleOpenJoined = forwardRef(function CheckCircleOpenJoined(
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
    createElement('polyline', {"points":"8.949462885140747 11.000000000480213 11.949462885140747 14.000000000480213 18.514404291390747 7.435058594230213","key":"0"}),
    createElement('path', {"d":"M18.514404291390747,7.435058594230213c-1.445373535161707-2.074645996090112-3.844787597661707-3.43505859375-6.56494140625-3.43505859375-4.41827392578125,0-8,3.58172607421875-8,8,0,4.418273925777612,3.58172607421875,8,8,8,4.418273925779431,0,8-3.581726074222388,8-8","key":"1"})
  );
});

CheckCircleOpenJoined.displayName = 'CheckCircleOpenJoined';

export default CheckCircleOpenJoined;
export { CheckCircleOpenJoined };
