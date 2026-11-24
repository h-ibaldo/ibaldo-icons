import { createElement, forwardRef } from 'react';

const LockOpenCheckCornerRound = forwardRef(function LockOpenCheckCornerRound(
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
    createElement('path', {"d":"M15.527343744516656,5.000000000480213c-.772216796875-1.764404296875-2.5286865234375-3-4.577880859375-3-2.761413574217841,0-5,2.23858642578125-5,5v3","key":"0"}),
    createElement('polyline', {"points":"13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213","key":"1"}),
    createElement('path', {"d":"M17.949462885141656,15.000000000480213c0-3.86602783203125-3.134033203125-7-7-7s-7,3.13397216796875-7,7c0,3.865966796875,3.134033203125,7,7,7","key":"2"})
  );
});

LockOpenCheckCornerRound.displayName = 'LockOpenCheckCornerRound';

export default LockOpenCheckCornerRound;
export { LockOpenCheckCornerRound };
