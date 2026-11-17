'use strict';

const { createElement, forwardRef } = require('react');

const WindowStackShadowBare = forwardRef(function WindowStackShadowBare(
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
    createElement('rect', {"x":"2","y":"2","width":"16","height":"16","rx":"2","ry":"2","key":"0"}),
    createElement('path', {"d":"M22,8.000000000000909v11.866666666671335c0,1.178207466298772-.955125867019888,2.133333333327755-2.133333333329574,2.133333333327755h-11.866666666670426","key":"1"}),
    createElement('line', {"x1":"5.035268548598651","y1":"4.998779303362426","x2":"5.025268548599342","y2":"4.998779303362426","key":"2"}),
    createElement('line', {"x1":"8.035268548598651","y1":"4.998779303362426","x2":"8.025268548599342","y2":"4.998779303362426","key":"3"})
  );
});

WindowStackShadowBare.displayName = 'WindowStackShadowBare';

module.exports = WindowStackShadowBare;
module.exports.WindowStackShadowBare = WindowStackShadowBare;
module.exports.default = WindowStackShadowBare;
