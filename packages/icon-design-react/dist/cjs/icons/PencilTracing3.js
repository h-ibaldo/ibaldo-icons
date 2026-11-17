'use strict';

const { createElement, forwardRef } = require('react');

const PencilTracing3 = forwardRef(function PencilTracing3(
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
    createElement('path', {"d":"M21.500000012390046,3.843145761176856l-1.171572891599681-1.171572883138651c-.781048584780365-.781048579128765-2.047378539470628-.781048576331159-2.828427120790366.000000006259143L2.99999999927968,17.171572891407777l-.99999999927968,4.999999999281499,4.99999999963984-.99999999963984,14.500000017849743-14.5c.781048585510689-.781048585500685.781048583230586-2.047378547180415-.000000005099537-2.82842712987258Z","key":"0"}),
    createElement('line', {"x1":"14.99999999963984","y1":"5.171572890689276","x2":"19","y2":"9.171572891049436","key":"1"}),
    createElement('line', {"x1":"3.99999999963984","y1":"16.171572891049436","x2":"8","y2":"20.171572891407777","key":"2"}),
    createElement('line', {"x1":"11","y1":"22.171572891049436","x2":"22","y2":"22.171572891049436","key":"3"})
  );
});

PencilTracing3.displayName = 'PencilTracing3';

module.exports = PencilTracing3;
module.exports.PencilTracing3 = PencilTracing3;
module.exports.default = PencilTracing3;
