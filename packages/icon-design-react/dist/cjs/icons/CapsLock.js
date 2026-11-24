'use strict';

const { createElement, forwardRef } = require('react');

const CapsLock = forwardRef(function CapsLock(
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
    createElement('polygon', {"points":"20.999999977100742 9.999996563434252 11.999999977100742 1.999996563434252 2.999999977100742 9.999996563434252 7.999999977100742 9.999996563434252 7.999999977100742 14.999996563434252 15.999999977100742 14.999996563434252 15.999999977100742 9.999996563434252 20.999999977100742 9.999996563434252","key":"0"}),
    createElement('rect', {"x":"7.999999977100742","y":"18.999996563434252","width":"8","height":"3","key":"1"})
  );
});

CapsLock.displayName = 'CapsLock';

module.exports = CapsLock;
module.exports.CapsLock = CapsLock;
module.exports.default = CapsLock;
