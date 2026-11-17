import { createElement, forwardRef } from 'react';

const LockPadlockCircle = forwardRef(function LockPadlockCircle(
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
    createElement('circle', {"cx":"11.949462885141656","cy":"12.000000000480213","r":"10","key":"0"}),
    createElement('rect', {"x":"7.949462885141656","y":"12.000000000480213","width":"8","height":"5","key":"1"}),
    createElement('path', {"d":"M13.949462876412326,12.000000000480213v-3.000001994521881c0-1.104568398117408-.895429607360711-1.999998005478119-1.999998005478119-1.999998005478119h-.000004000001354c-1.104568399970049,0-1.999998008110197.895429610263818-1.999998005479938,1.999998010240233l.000000007149538,3.000001989759767","key":"2"})
  );
});

LockPadlockCircle.displayName = 'LockPadlockCircle';

export default LockPadlockCircle;
export { LockPadlockCircle };
