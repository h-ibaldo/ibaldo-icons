'use strict';

const { createElement, forwardRef } = require('react');

const LoginSquare = forwardRef(function LoginSquare(
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
    createElement('polyline', {"points":"10.067167566010539 9.43296768574146 13.067167566010539 12.43296768574146 10.067167566010539 15.43296768574146","key":"0"}),
    createElement('line', {"x1":"2.067167566010539","y1":"12.43296768574146","x2":"13.067167566010539","y2":"12.43296768574146","key":"1"}),
    createElement('rect', {"x":"2.067167566010539","y":"2.43296768574146","width":"20","height":"20","rx":"1","ry":"1","key":"2"})
  );
});

LoginSquare.displayName = 'LoginSquare';

module.exports = LoginSquare;
module.exports.LoginSquare = LoginSquare;
module.exports.default = LoginSquare;
