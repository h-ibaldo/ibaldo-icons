'use strict';

const { createElement, forwardRef } = require('react');

const TabCheckStep = forwardRef(function TabCheckStep(
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
    createElement('polyline', {"points":"12.050537104490104 21.997565477288845 2.050537104500108 21.997565477288845 2.050537104500108 1.997565477288845 11.050537104500108 1.997565477288845 11.050537104500108 5.997565477288845 22.050537104500108 5.997565477288845 22.050537104500108 12.997565477288845","key":"0"}),
    createElement('line', {"x1":"22.050537104500108","y1":"1.997565477288845","x2":"15.050537104500108","y2":"1.997565477288845","key":"1"}),
    createElement('polyline', {"points":"22.050537104500108 16.997565477285207 18.050537104500108 21.997565477285207 15.050537104500108 18.997565477285207","key":"2"})
  );
});

TabCheckStep.displayName = 'TabCheckStep';

module.exports = TabCheckStep;
module.exports.TabCheckStep = TabCheckStep;
module.exports.default = TabCheckStep;
