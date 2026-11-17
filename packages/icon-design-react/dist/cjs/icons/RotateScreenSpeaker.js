'use strict';

const { createElement, forwardRef } = require('react');

const RotateScreenSpeaker = forwardRef(function RotateScreenSpeaker(
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
    createElement('rect', {"x":"1.974731413605696","y":"9.998779298537556","width":"20","height":"12","rx":"2","ry":"2","key":"0"}),
    createElement('polyline', {"points":"14.974731413605696 5.998779298537556 18.974731413605696 5.998779298537556 18.974731413605696 1.998779298537556","key":"1"}),
    createElement('path', {"d":"M18.895751921416377,5.998779298537556c-1.383911132810681-2.388916015625-3.961547851560681-4-6.921020507810681-4s-5.537109375,1.611083984375-6.921020507808862,4","key":"2"}),
    createElement('line', {"x1":"4.974731413605696","y1":"14.998779298537556","x2":"4.974731413605696","y2":"16.998779298537556","key":"3"}),
    createElement('line', {"x1":"18.964731413606387","y1":"15.998779298537556","x2":"18.974731413605696","y2":"15.998779298537556","key":"4"})
  );
});

RotateScreenSpeaker.displayName = 'RotateScreenSpeaker';

module.exports = RotateScreenSpeaker;
module.exports.RotateScreenSpeaker = RotateScreenSpeaker;
module.exports.default = RotateScreenSpeaker;
