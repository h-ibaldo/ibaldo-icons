import { createElement, forwardRef } from 'react';

const GeometricFormsDeviation2 = forwardRef(function GeometricFormsDeviation2(
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
    createElement('circle', {"cx":"6.00000000018008","cy":"6.000000000446562","r":"4","key":"0"}),
    createElement('circle', {"cx":"18.00000000018008","cy":"18.000000000447017","r":"3.999999999999773","key":"1"}),
    createElement('rect', {"x":"14.00000000018008","y":"2.000000000446562","width":"8","height":"8","key":"2"}),
    createElement('circle', {"cx":"6.00000000018008","cy":"18.000000000447017","r":"3.999999999999773","key":"3"})
  );
});

GeometricFormsDeviation2.displayName = 'GeometricFormsDeviation2';

export default GeometricFormsDeviation2;
export { GeometricFormsDeviation2 };
