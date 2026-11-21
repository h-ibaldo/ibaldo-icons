'use strict';

const { createElement, forwardRef } = require('react');

const TvLegs = forwardRef(function TvLegs(
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
    createElement('path', {"d":"M2 4L22 4L22 15L2 15Z","key":"0"}),
    createElement('path', {"d":"M12 15L12 17","key":"1"}),
    createElement('path', {"d":"M4 20L12 18L20 20","key":"2"})
  );
});

TvLegs.displayName = 'TvLegs';

module.exports = TvLegs;
module.exports.TvLegs = TvLegs;
module.exports.default = TvLegs;
