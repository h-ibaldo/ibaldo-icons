'use strict';

const { createElement, forwardRef } = require('react');

const Briefcase7 = forwardRef(function Briefcase7(
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
    createElement('rect', {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M8,6.999999999998181v-3c0-.552284749830505.447715250169495-1,1-1h6c.552284749830505,0,1,.447715250169495,1,1v3","key":"1"}),
    createElement('line', {"x1":"9","y1":"12.999999999998181","x2":"9","y2":"16.999999999998181","key":"2"}),
    createElement('line', {"x1":"15","y1":"12.999999999998181","x2":"15","y2":"16.999999999998181","key":"3"}),
    createElement('line', {"x1":"2","y1":"14.999999999998181","x2":"22","y2":"14.999999999998181","key":"4"})
  );
});

Briefcase7.displayName = 'Briefcase7';

module.exports = Briefcase7;
module.exports.Briefcase7 = Briefcase7;
module.exports.default = Briefcase7;
