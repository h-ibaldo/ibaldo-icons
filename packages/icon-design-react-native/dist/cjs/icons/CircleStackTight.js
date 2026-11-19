'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path } = RNSvg;

const CircleStackTight = forwardRef(function CircleStackTight(
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
    createElement(Circle, {"cx":"8.999999976489562","cy":"14.998779299956368","r":"7.000000000000001","key":"0"}),
    createElement(Path, {"d":"M18.214172339779907,15.212951663237618c2.247497558590112-1.1649169921875,3.785827636709655-3.5079345703125,3.785827636709655-6.21417236328125,0-3.865966796875-3.134033203119543-7-7-7-2.706237792959655,0-5.049255371090112,1.538330078125-6.214172363279431,3.78582763671875","key":"1"}),
    createElement(Path, {"d":"M15.214172339779907,18.212951663237618c2.247497558590112-1.1649169921875,3.785827636709655-3.5079345703125,3.785827636709655-6.21417236328125,0-3.865966796875-3.134033203119543-7-7-7-2.706237792959655,0-5.049255371090112,1.538330078125-6.214172363279431,3.78582763671875","key":"2"})
  );
});

CircleStackTight.displayName = 'CircleStackTight';

module.exports = CircleStackTight;
module.exports.CircleStackTight = CircleStackTight;
module.exports.default = CircleStackTight;
