'use strict';

const { createElement, forwardRef } = require('react');

const WindowMinusCenterPlain = forwardRef(function WindowMinusCenterPlain(
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
    createElement('line', {"x1":"14.999999993642632","y1":"14.998779299956368","x2":"8.999999993642632","y2":"14.998779299956368","key":"0"}),
    createElement('rect', {"x":"1.999999993642632","y":"1.998779299956368","width":"20","height":"20","rx":"3","ry":"3","key":"1"}),
    createElement('line', {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368","key":"2"})
  );
});

WindowMinusCenterPlain.displayName = 'WindowMinusCenterPlain';

module.exports = WindowMinusCenterPlain;
module.exports.WindowMinusCenterPlain = WindowMinusCenterPlain;
module.exports.default = WindowMinusCenterPlain;
