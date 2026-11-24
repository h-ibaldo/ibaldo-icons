'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const BellDotDash = forwardRef(function BellDotDash(
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
    createElement(Line, {"x1":"19.974731449499814","y1":"17.000000000480213","x2":"3.974731449499814","y2":"17.000000000480213","key":"0"}),
    createElement(Line, {"x1":"9.974731449499814","y1":"21.000000000480213","x2":"13.974731449499814","y2":"21.000000000480213","key":"1"}),
    createElement(Circle, {"cx":"17.974731449499814","cy":"6.000000000480213","r":"3","key":"2"}),
    createElement(Path, {"d":"M15.578918461220383,4.211303711417713c-1.004211425779431-.757080078128638-2.249633789060681-1.2113037109375-3.604187011720569-1.2113037109375-3.313720703119543,0-6,2.686279296878638-6,6v8h12v-8","key":"3"})
  );
});

BellDotDash.displayName = 'BellDotDash';

module.exports = BellDotDash;
module.exports.BellDotDash = BellDotDash;
module.exports.default = BellDotDash;
