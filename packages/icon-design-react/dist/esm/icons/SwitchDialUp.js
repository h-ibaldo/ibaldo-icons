import { createElement, forwardRef } from 'react';

const SwitchDialUp = forwardRef(function SwitchDialUp(
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
    createElement('circle', {"cx":"11.999999977100742","cy":"15.999996563436071","r":"6.000000000000909","key":"0"}),
    createElement('line', {"x1":"11.999999977029802","y1":"18.828423688180919","x2":"11.999999977160769","y2":"13.171569438687584","key":"1"}),
    createElement('circle', {"cx":"19.999999977100742","cy":"3.99999656343789","r":"2","key":"2"}),
    createElement('circle', {"cx":"11.999999977100742","cy":"3.99999656343789","r":"2","key":"3"}),
    createElement('circle', {"cx":"3.999999977100742","cy":"3.99999656343789","r":"2","key":"4"}),
    createElement('line', {"x1":"11.999999977100742","y1":"3.99999656343789","x2":"11.999999977100742","y2":"3.99999656343789","key":"5"})
  );
});

SwitchDialUp.displayName = 'SwitchDialUp';

export default SwitchDialUp;
export { SwitchDialUp };
