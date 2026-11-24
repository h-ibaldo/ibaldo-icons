'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const LoginWide = forwardRef(function LoginWide(
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
    createElement(Polyline, {"points":"13.974731449592582 17.000000000347427 8.974731450040053 11.999999999895408 13.974731450491163 7.000000000347427","key":"0"}),
    createElement(Line, {"x1":"21.974731450043691","y1":"12.000000001063199","x2":"8.974731450040053","y2":"11.999999999895408","key":"1"}),
    createElement(Path, {"d":"M12.974731450043691,22.000000000481123H4.974731450043691c-1.656854249488788,0-3-1.343145750508484-3-3V5.000000000481123c0-1.656854249493335,1.343145750511212-3,3-3h8","key":"2"})
  );
});

LoginWide.displayName = 'LoginWide';

module.exports = LoginWide;
module.exports.LoginWide = LoginWide;
module.exports.default = LoginWide;
