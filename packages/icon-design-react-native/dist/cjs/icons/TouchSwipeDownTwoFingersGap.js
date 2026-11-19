'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const TouchSwipeDownTwoFingersGap = forwardRef(function TouchSwipeDownTwoFingersGap(
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
    createElement(Polyline, {"points":"20.974731433996567 18.998779300560273 17.974731433996567 21.998779300560273 14.974731433996567 18.998779300560273","key":"0"}),
    createElement(Line, {"x1":"17.974731433996567","y1":"13.998779300560273","x2":"17.974731433996567","y2":"21.998779300560273","key":"1"}),
    createElement(Path, {"d":"M13.974731433996567,5.998779300556635c0,2.209138999201969,1.790861000808945,4,4,4.000000000003638,2.20913899920015-.000000000003638,4-1.790861000801669,4-4,0-2.209138999201969-1.79086100079985-4.000000000003638-4-4-2.209138999191055-.000000000003638-4,1.790861000798031-4,3.999999999996362Z","key":"2"}),
    createElement(Polyline, {"points":"8.974731433996567 18.998779301098693 5.974731433996567 21.998779301098693 2.974731433996567 18.998779301098693","key":"3"}),
    createElement(Line, {"x1":"5.974731433996567","y1":"13.998779301098693","x2":"5.974731433996567","y2":"21.998779301098693","key":"4"}),
    createElement(Path, {"d":"M1.974731433996567,5.998779301098693c0,2.209138999198331,1.790861000808945,3.999999999996362,4,4,2.20913899920015-.000000000003638,4-1.790861000801669,4-4,0-2.209138999201969-1.79086100079985-4.000000000003638-4-4-2.209138999191055-.000000000003638-4,1.790861000798031-4,4Z","key":"5"})
  );
});

TouchSwipeDownTwoFingersGap.displayName = 'TouchSwipeDownTwoFingersGap';

module.exports = TouchSwipeDownTwoFingersGap;
module.exports.TouchSwipeDownTwoFingersGap = TouchSwipeDownTwoFingersGap;
module.exports.default = TouchSwipeDownTwoFingersGap;
