'use strict';

const { createElement, forwardRef } = require('react');

const GaugeLongTicksFlat = forwardRef(function GaugeLongTicksFlat(
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
    createElement('path', {"d":"M12 3.004L12 6.004","key":"0"}),
    createElement('path', {"d":"M22 13.004L19 13.004","key":"1"}),
    createElement('path', {"d":"M5 13.004L2 13.004","key":"2"}),
    createElement('path', {"d":"M7 8.004L5 6.004","key":"3"}),
    createElement('path', {"d":"M13.926 13.539C14.223 12.477 13.602 11.371 12.535 11.074C11.473 10.777 10.371 11.402 10.074 12.465C9.777 13.527 10.398 14.633 11.465 14.93C12.527 15.227 13.629 14.602 13.926 13.539Z","key":"4"}),
    createElement('path', {"d":"M16.617 7.895L13.336 11.523","key":"5"}),
    createElement('path', {"d":"M6.012 21L17.984 21C19.695 19.723 21.016 17.898 21.633 15.688C23.113 10.363 20.004 4.852 14.684 3.367C9.363 1.887 3.848 5 2.367 10.316C1.227 14.406 2.809 18.602 6.012 21Z","key":"6"}),
    createElement('path', {"d":"M10.586 14.414L9 16","key":"7"})
  );
});

GaugeLongTicksFlat.displayName = 'GaugeLongTicksFlat';

module.exports = GaugeLongTicksFlat;
module.exports.GaugeLongTicksFlat = GaugeLongTicksFlat;
module.exports.default = GaugeLongTicksFlat;
