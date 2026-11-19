'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const Login = forwardRef(function Login(
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
    createElement(Polyline, {"points":"10.974731450043691 15.000000000481123 7.974731450040053 12.000000000479304 10.974731450043691 9.000000000481123","key":"0"}),
    createElement(Line, {"x1":"20.974731450043691","y1":"12.000000000481123","x2":"7.974731450040053","y2":"12.000000000479304","key":"1"}),
    createElement(Path, {"d":"M15.974731450040053,17.000000000481123v4c0,.552284749828686-.447715250167676,1-1,1H3.974731450040053c-.552284749828686,0-1-.447715250171314-1-1V3.000000000481123c0-.552284749832324.447715250171314-1,1-1h11c.552284749832324,0,1,.447715250167676,1,1v4","key":"2"})
  );
});

Login.displayName = 'Login';

module.exports = Login;
module.exports.Login = Login;
module.exports.default = Login;
