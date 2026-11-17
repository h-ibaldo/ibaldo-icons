'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindowClose23 = forwardRef(function ApplicationWindowClose23(
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
    createElement('g', {"key":"0"},
      createElement('line', {"x1":"13.999999993642632","y1":"12.998779299956368","x2":"9.999999993642632","y2":"16.998779299956368","key":"0"}),
      createElement('line', {"x1":"13.999999993642632","y1":"16.998779299956368","x2":"9.999999993642632","y2":"12.998779299956368","key":"1"})),
    createElement('rect', {"x":"1.999999993631718","y":"1.998779299956368","width":"20","height":"20","rx":"3","ry":"3","key":"1"}),
    createElement('line', {"x1":"1.999999993631718","y1":"7.998779299956368","x2":"21.999999993631718","y2":"7.998779299956368","key":"2"})
  );
});

ApplicationWindowClose23.displayName = 'ApplicationWindowClose23';

module.exports = ApplicationWindowClose23;
module.exports.ApplicationWindowClose23 = ApplicationWindowClose23;
module.exports.default = ApplicationWindowClose23;
