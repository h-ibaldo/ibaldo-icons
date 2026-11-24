'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const Warning = forwardRef(function Warning(
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
    createElement(Path, {"d":"M4.357273892144804,21.000000000479304h15.234915115801414c1.521206268156675,0,2.485529640249297-1.630932366997513,1.752431817349134-2.963837499543843l-7.617457557902526-13.849922832540869c-.759852500326815-1.381550000608513-2.745011134367815-1.381550000608513-3.504863634698268,0l-7.617457557898888,13.849922832540869c-.733097822900163,1.33290513254633.231225549177907,2.963837499543843,1.752431817349134,2.963837499543843Z","key":"0"}),
    createElement(Line, {"x1":"11.974731450043691","y1":"17.010000000480431","x2":"11.974731450043691","y2":"17.000000000479304","key":"1"}),
    createElement(Line, {"x1":"11.974731450043691","y1":"10.000000000479304","x2":"11.974731450043691","y2":"13.000000000479304","key":"2"})
  );
});

Warning.displayName = 'Warning';

module.exports = Warning;
module.exports.Warning = Warning;
module.exports.default = Warning;
