'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const XUndoWide = forwardRef(function XUndoWide(
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
    createElement(Line, {"x1":"1.999999990799552","y1":"15.000000000446562","x2":"11.999999990799552","y2":"5.000000000446562","key":"0"}),
    createElement(Line, {"x1":"11.999999990799552","y1":"15.000000000446562","x2":"1.999999990799552","y2":"5.000000000446562","key":"1"}),
    createElement(Polyline, {"points":"16.999999990799552 13.000000000446562 13.999999990799552 10.000000000446562 16.999999990799552 7.000000000446562","key":"2"}),
    createElement(Path, {"d":"M12.999999990799552,20.000000000446562h4.000004999281373c2.761420987728343.000000000001819,4.999994999998307-2.238574012266326,4.999994999998307-4.99999499999376v-.000010000000657c0-2.761420987720157-2.238574012259051-4.999994999987393-4.999994999980117-4.999994999998307l-2.000005000019883-.000000000007276","key":"3"})
  );
});

XUndoWide.displayName = 'XUndoWide';

module.exports = XUndoWide;
module.exports.XUndoWide = XUndoWide;
module.exports.default = XUndoWide;
