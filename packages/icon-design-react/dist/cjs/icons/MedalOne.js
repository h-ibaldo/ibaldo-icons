'use strict';

const { createElement, forwardRef } = require('react');

const MedalOne = forwardRef(function MedalOne(
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
    createElement('path', {"d":"M18 9C18 12.313 15.313 15 12 15C8.688 15 6 12.313 6 9C6 5.688 8.688 3 12 3C15.313 3 18 5.688 18 9Z","key":"0"}),
    createElement('path', {"d":"M8 13.465L8 21L12 19L16 21L16 13.465","key":"1"}),
    createElement('path', {"d":"M12 11L12 7L11 7","key":"2"})
  );
});

MedalOne.displayName = 'MedalOne';

module.exports = MedalOne;
module.exports.MedalOne = MedalOne;
module.exports.default = MedalOne;
