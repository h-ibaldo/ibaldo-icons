'use strict';

const { createElement, forwardRef } = require('react');

const ConcentricCirclesState2 = forwardRef(function ConcentricCirclesState2(
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
    createElement('circle', {"cx":"11.999999976489562","cy":"11.998779299956368","r":"10","key":"0"}),
    createElement('circle', {"cx":"11.999999976489562","cy":"11.998779299956368","r":"5","key":"1"})
  );
});

ConcentricCirclesState2.displayName = 'ConcentricCirclesState2';

module.exports = ConcentricCirclesState2;
module.exports.ConcentricCirclesState2 = ConcentricCirclesState2;
module.exports.default = ConcentricCirclesState2;
