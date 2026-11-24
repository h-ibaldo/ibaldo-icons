'use strict';

const { createElement, forwardRef } = require('react');

const CapsLockOff = forwardRef(function CapsLockOff(
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
    createElement('rect', {"x":"7.999999977100742","y":"18.999996563434252","width":"8","height":"3","key":"0"}),
    createElement('line', {"x1":"20.999999977100742","y1":"2.999996563434252","x2":"2.999999977100742","y2":"20.999996563434252","key":"1"}),
    createElement('g', {"key":"2"},
      createElement('polyline', {"points":"14.64703366851063 4.352962872028002 11.999999977100742 1.999996563434252 2.999999977100742 9.999996563434252 7.999999977100742 9.999996563434252 7.999999977100742 10.999996563434252","key":"0"}),
      createElement('polyline', {"points":"7.999999977100742 15.999996563434252 15.999999977100742 15.999996563434252 15.999999977100742 9.999996563434252 20.999999977100742 9.999996563434252 17.294128395069492 6.705868145465502","key":"1"}))
  );
});

CapsLockOff.displayName = 'CapsLockOff';

module.exports = CapsLockOff;
module.exports.CapsLockOff = CapsLockOff;
module.exports.default = CapsLockOff;
