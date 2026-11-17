import { createElement, forwardRef } from 'react';

const Cast2 = forwardRef(function Cast2(
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
    createElement('path', {"d":"M15,19.999999999998181h4c1.656854249489697,0,3-1.343145750506665,3-3V6.999999999998181c0-1.656854249493335-1.343145750510303-3-3-3H5c-1.656854249489697,0-3,1.343145750506665-3,3","key":"0"}),
    createElement('path', {"d":"M3,19.999999999998181c0-.552284749799583-.447715250200417-1-1-1","key":"1"}),
    createElement('path', {"d":"M7,19.999999999998181c0-2.761423749001551-2.238576251000268-5-5-5","key":"2"}),
    createElement('path', {"d":"M11,19.999999999998181c0-4.970562748199882-4.029437251800118-9-9-9","key":"3"})
  );
});

Cast2.displayName = 'Cast2';

export default Cast2;
export { Cast2 };
