'use strict';

const { createElement, forwardRef } = require('react');

const PencilTip = forwardRef(function PencilTip(
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
    createElement('path', {"d":"M21.500000012390956,3.757359315659414l-1.17157289160059-1.171572883151384c-.781048584780365-.78104857911967-2.047378539469719-.781048576320245-2.828427120790366.000000006260962L2.99999999927968,17.085786445889426l-.99999999927968,4.999999999278771,4.99999999963984-.99999999963984,14.500000017849743-14.5c.78104858550978-.781048585500685.781048583230586-2.047378547191329-.000000005098627-2.828427129868942Z","key":"0"}),
    createElement('line', {"x1":"14.99999999963984","y1":"5.085786445168196","x2":"19","y2":"9.085786445528356","key":"1"}),
    createElement('line', {"x1":"3.99999999963984","y1":"16.085786445528356","x2":"8","y2":"20.085786445889426","key":"2"})
  );
});

PencilTip.displayName = 'PencilTip';

module.exports = PencilTip;
module.exports.PencilTip = PencilTip;
module.exports.default = PencilTip;
