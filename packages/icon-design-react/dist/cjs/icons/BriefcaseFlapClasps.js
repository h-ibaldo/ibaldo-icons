'use strict';

const { createElement, forwardRef } = require('react');

const BriefcaseFlapClasps = forwardRef(function BriefcaseFlapClasps(
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
    createElement('path', {"d":"M19.586 21L4.414 21C3.082 21 2 19.918 2 18.586L2 9.414C2 8.082 3.082 7 4.414 7L19.586 7C20.918 7 22 8.082 22 9.414L22 18.586C22 19.918 20.918 21 19.586 21Z","key":"0"}),
    createElement('path', {"d":"M16 7L8 7L8 4C8 3.449 8.449 3 9 3L15 3C15.551 3 16 3.449 16 4Z","key":"1"}),
    createElement('path', {"d":"M2.305 8.262L6.398 13.266C6.781 13.73 7.348 14 7.949 14L16.051 14C16.652 14 17.219 13.73 17.602 13.266L21.695 8.262","key":"2"}),
    createElement('path', {"d":"M9 12L9 16","key":"3"}),
    createElement('path', {"d":"M15 12L15 16","key":"4"})
  );
});

BriefcaseFlapClasps.displayName = 'BriefcaseFlapClasps';

module.exports = BriefcaseFlapClasps;
module.exports.BriefcaseFlapClasps = BriefcaseFlapClasps;
module.exports.default = BriefcaseFlapClasps;
