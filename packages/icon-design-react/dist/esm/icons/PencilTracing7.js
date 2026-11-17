import { createElement, forwardRef } from 'react';

const PencilTracing7 = forwardRef(function PencilTracing7(
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
    createElement('polygon', {"points":"22 6.171572891049436 18 2.171572891049436 2 18.171572891049436 2.00000000036016 22.171572890689276 6.00000000036016 22.171572890689276 22 6.171572891049436","key":"0"}),
    createElement('line', {"x1":"14.99999999963984","y1":"5.171572890689276","x2":"19","y2":"9.171572891049436","key":"1"}),
    createElement('line', {"x1":"11","y1":"22.171572891049436","x2":"22","y2":"22.171572891049436","key":"2"})
  );
});

PencilTracing7.displayName = 'PencilTracing7';

export default PencilTracing7;
export { PencilTracing7 };
