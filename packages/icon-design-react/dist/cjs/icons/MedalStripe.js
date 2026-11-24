'use strict';

const { createElement, forwardRef } = require('react');

const MedalStripe = forwardRef(function MedalStripe(
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
    createElement('path', {"d":"M16 17C16 19.211 14.211 21 12 21C9.789 21 8 19.211 8 17C8 14.789 9.789 13 12 13C14.211 13 16 14.789 16 17Z","key":"0"}),
    createElement('path', {"d":"M12 12L7 9L7 3L17 3L17 9Z","key":"1"}),
    createElement('path', {"d":"M12 3L12 12","key":"2"})
  );
});

MedalStripe.displayName = 'MedalStripe';

module.exports = MedalStripe;
module.exports.MedalStripe = MedalStripe;
module.exports.default = MedalStripe;
