import { createElement, forwardRef } from 'react';

const SpinnerSplit = forwardRef(function SpinnerSplit(
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
    createElement('path', {"d":"M11.949462885140747,21.000000000480213c4.970562748198972,0,9-4.029437251800118,9-9","key":"0"}),
    createElement('path', {"d":"M11.949462885140747,3.000000000480213C6.978900136940865,3.000000000480213,2.949462885140747,7.029437252280331,2.949462885140747,12.000000000480213","key":"1"})
  );
});

SpinnerSplit.displayName = 'SpinnerSplit';

export default SpinnerSplit;
export { SpinnerSplit };
