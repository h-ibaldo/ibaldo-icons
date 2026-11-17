'use strict';

const { createElement, forwardRef } = require('react');

const Briefcase5 = forwardRef(function Briefcase5(
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
    createElement('path', {"d":"M22,13.584770542298429c0,1.333894396830146-1.081335060860511,2.415229457699752-2.415229457699752,2.415229457699752H4.415229457699752c-1.333894396830146,0-2.415229457699752-1.081335060869606-2.415229457699752-2.415229457699752","key":"1"}),
    createElement('path', {"d":"M9,2.999999999998181h6c.551915024494001,0,1,.448084975506,1,1v3h-8v-3c0-.551915024494.448084975505999-1,1-1Z","key":"2"}),
    createElement('line', {"x1":"11","y1":"11.999999999998181","x2":"13","y2":"11.999999999998181","key":"3"})
  );
});

Briefcase5.displayName = 'Briefcase5';

module.exports = Briefcase5;
module.exports.Briefcase5 = Briefcase5;
module.exports.default = Briefcase5;
