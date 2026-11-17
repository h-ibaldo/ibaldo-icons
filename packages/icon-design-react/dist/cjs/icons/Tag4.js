'use strict';

const { createElement, forwardRef } = require('react');

const Tag4 = forwardRef(function Tag4(
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
    createElement('path', {"d":"M19.974731438273011,18.998779300285605h-11.080130155060033c-.583849774500777,0-1.138548808089581-.255125457006216-1.51851320472997-.698417253086518l-4.285714285710128-5c-.641982393709441-.748979459309339-.641982393709441-1.854186034517625,0-2.603165493823326l4.285714285710128-5c.379964396640389-.443291796080302.934663430229193-.698417253090156,1.51851320472997-.698417253090156h11.080130155060033c1.104569499659192,0,2,.895430500338989,2,2v10c0,1.104569499661011-.895430500340808,2-2,2Z","key":"0"})
  );
});

Tag4.displayName = 'Tag4';

module.exports = Tag4;
module.exports.Tag4 = Tag4;
module.exports.default = Tag4;
