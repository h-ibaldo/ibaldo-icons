'use strict';

const { createElement, forwardRef } = require('react');

const ScreenShareLaptop = forwardRef(function ScreenShareLaptop(
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
    createElement('rect', {"x":"5.974731440099276","y":"7.000000003885361","width":"15","height":"11","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M2.974731440099276,15.000000003885361c-.552284749819592,0-1-.447715250167676-1-1V4.000000003885361c0-.552284749828686.447715250180408-1,1-1h13c.552284749830505,0,1,.447715250171314,1,1","key":"1"}),
    createElement('line', {"x1":"4.974731440099276","y1":"21.000000003885361","x2":"21.974731440099276","y2":"21.000000003885361","key":"2"})
  );
});

ScreenShareLaptop.displayName = 'ScreenShareLaptop';

module.exports = ScreenShareLaptop;
module.exports.ScreenShareLaptop = ScreenShareLaptop;
module.exports.default = ScreenShareLaptop;
