'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const LockOpenNarrow = forwardRef(function LockOpenNarrow(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Rect, {"x":"4.974731450040053","y":"10.000000003885361","width":"14","height":"12","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M16.552612309429605,5.000000003885361c-.772216796889552-1.764404296875-2.528686523450233-3-4.577880859389552-3-2.761474609360448,0-5,2.23858642578125-5,5v3","key":"1"})
  );
});

LockOpenNarrow.displayName = 'LockOpenNarrow';

module.exports = LockOpenNarrow;
module.exports.LockOpenNarrow = LockOpenNarrow;
module.exports.default = LockOpenNarrow;
