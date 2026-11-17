'use strict';

const { createElement, forwardRef } = require('react');

const LevelsAdjust = forwardRef(function LevelsAdjust(
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
    createElement('circle', {"cx":"17.000000000184627","cy":"15.000000019901563","r":"3","key":"0"}),
    createElement('line', {"x1":"17.000000000184627","y1":"12.000000019901563","x2":"17.000000000184627","y2":"2.000000019906111","key":"1"}),
    createElement('line', {"x1":"17.000000000184627","y1":"22.000000019904292","x2":"17.000000000184627","y2":"18.000000019904292","key":"2"}),
    createElement('circle', {"cx":"7.000000000184627","cy":"9.000000019906111","r":"3","key":"3"}),
    createElement('line', {"x1":"7.000000000184627","y1":"12.000000019906111","x2":"7.000000000184627","y2":"22.000000019901563","key":"4"}),
    createElement('line', {"x1":"7.000000000184627","y1":"2.000000019904292","x2":"7.000000000184627","y2":"6.000000019904292","key":"5"})
  );
});

LevelsAdjust.displayName = 'LevelsAdjust';

module.exports = LevelsAdjust;
module.exports.LevelsAdjust = LevelsAdjust;
module.exports.default = LevelsAdjust;
