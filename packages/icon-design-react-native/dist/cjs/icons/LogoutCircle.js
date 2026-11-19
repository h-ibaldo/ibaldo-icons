'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const LogoutCircle = forwardRef(function LogoutCircle(
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
    createElement(Polyline, {"points":"18.974731450043691 9.000000000481123 21.974731450043691 12.000000000481123 18.974731450043691 15.000000000481123","key":"0"}),
    createElement(Line, {"x1":"9.974731450043691","y1":"12.000000000481123","x2":"21.974731450043691","y2":"12.000000000481123","key":"1"}),
    createElement(Path, {"d":"M15.254028325043691,6.000000000479304c-1.409423828125-1.241149902342841-3.253662109375-2-5.279296875-2C5.556457524262441,4.000000000479304,1.974731450043691,7.581726074698963,1.974731450043691,12.000000000479304c0,4.418273925782159,3.58172607421875,8,8,8,2.025634765625,0,3.869873046875-.758850097655341,5.279296875-2","key":"2"})
  );
});

LogoutCircle.displayName = 'LogoutCircle';

module.exports = LogoutCircle;
module.exports.LogoutCircle = LogoutCircle;
module.exports.default = LogoutCircle;
