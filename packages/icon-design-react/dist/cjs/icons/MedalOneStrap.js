'use strict';

const { createElement, forwardRef } = require('react');

const MedalOneStrap = forwardRef(function MedalOneStrap(
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
    createElement('path', {"d":"M18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16C6 12.688 8.688 10 12 10C15.313 10 18 12.688 18 16Z","key":"0"}),
    createElement('path', {"d":"M12 5.668L10 2L3 2L8.137 11.414","key":"1"}),
    createElement('path', {"d":"M15.863 11.414L21 2L14 2L9.277 10.656","key":"2"}),
    createElement('path', {"d":"M12 18L12 14L11 14","key":"3"})
  );
});

MedalOneStrap.displayName = 'MedalOneStrap';

module.exports = MedalOneStrap;
module.exports.MedalOneStrap = MedalOneStrap;
module.exports.default = MedalOneStrap;
