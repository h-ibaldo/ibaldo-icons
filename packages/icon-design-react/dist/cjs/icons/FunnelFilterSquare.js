'use strict';

const { createElement, forwardRef } = require('react');

const FunnelFilterSquare = forwardRef(function FunnelFilterSquare(
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
    createElement('rect', {"x":"1.974731449501633","y":"2.000000000479304","width":"20","height":"20.000000000000909","rx":"2.999999999999863","ry":"2.999999999999863","key":"0"}),
    createElement('line', {"x1":"6.974731449501633","y1":"8.000000000480213","x2":"16.974731449501633","y2":"8.000000000480213","key":"1"}),
    createElement('line', {"x1":"7.974731449501633","y1":"12.000000000480213","x2":"15.974731449501633","y2":"12.000000000480213","key":"2"}),
    createElement('line', {"x1":"8.974731449501633","y1":"16.000000000480213","x2":"14.974731449501633","y2":"16.000000000480213","key":"3"})
  );
});

FunnelFilterSquare.displayName = 'FunnelFilterSquare';

module.exports = FunnelFilterSquare;
module.exports.FunnelFilterSquare = FunnelFilterSquare;
module.exports.default = FunnelFilterSquare;
