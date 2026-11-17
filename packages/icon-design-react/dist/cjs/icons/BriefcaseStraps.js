'use strict';

const { createElement, forwardRef } = require('react');

const BriefcaseStraps = forwardRef(function BriefcaseStraps(
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
    createElement('path', {"d":"M9,2.999999999998181h6c.551915024494001,0,1,.448084975506,1,1v3h-8v-3c0-.551915024494.448084975505999-1,1-1Z","key":"1"}),
    createElement('line', {"x1":"7","y1":"6.999999999998181","x2":"7","y2":"20.999999999998181","key":"2"}),
    createElement('line', {"x1":"17","y1":"6.999999999998181","x2":"17","y2":"20.999999999998181","key":"3"})
  );
});

BriefcaseStraps.displayName = 'BriefcaseStraps';

module.exports = BriefcaseStraps;
module.exports.BriefcaseStraps = BriefcaseStraps;
module.exports.default = BriefcaseStraps;
