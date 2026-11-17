'use strict';

const { createElement, forwardRef } = require('react');

const RotateScreen5 = forwardRef(function RotateScreen5(
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
    createElement('rect', {"x":"1.974731413605696","y":"9.998779298541194","width":"20","height":"12","rx":"2","ry":"2","key":"0"}),
    createElement('polyline', {"points":"14.974731413605696 5.998779298537556 18.974731413605696 5.998779298537556 18.974731413605696 1.998779298537556","key":"1"}),
    createElement('path', {"d":"M18.895751921416377,5.998779298541194c-1.383911132810681-2.388916015625-3.961547851560681-4-6.921020507810681-4s-5.537109375,1.611083984375-6.921020507808862,4","key":"2"}),
    createElement('polyline', {"points":"1.974731413605696 16.998779298537556 3.974731413605696 16.998779298541194 3.974731413605696 14.998779298541194 1.974731413605696 14.998779298537556","key":"3"})
  );
});

RotateScreen5.displayName = 'RotateScreen5';

module.exports = RotateScreen5;
module.exports.RotateScreen5 = RotateScreen5;
module.exports.default = RotateScreen5;
