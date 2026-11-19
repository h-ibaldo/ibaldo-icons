'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const CloudXCornerRound = forwardRef(function CloudXCornerRound(
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
    createElement(Path, {"d":"M16.977172851560681,13.048095676607772c-.230346679691138-2.82556152341931-2.592224121090112-5.048095703110448-5.477172851560681-5.048095703110448s-5.246826171880457,2.222534179691138-5.477172851560681,5.048095703110448c-2.257751464849207.24133300783069-4.022827148439319,2.130065917979664-4.022827148439319,4.451904296889552,0,2.485290527340112,2.014709472650793,4.5,4.5,4.5h10c2.485290527340112,0,4.5-2.014709472659888,4.5-4.5,0-2.321838378909888-1.765075683599207-4.210571289058862-4.022827148439319-4.451904296889552Z","key":"0"}),
    createElement(Line, {"x1":"22","y1":"1.999999973497324","x2":"18","y2":"5.999999973497324","key":"1"}),
    createElement(Line, {"x1":"18","y1":"1.999999973497324","x2":"22.000000000090949","y2":"5.999999973497324","key":"2"})
  );
});

CloudXCornerRound.displayName = 'CloudXCornerRound';

module.exports = CloudXCornerRound;
module.exports.CloudXCornerRound = CloudXCornerRound;
module.exports.default = CloudXCornerRound;
