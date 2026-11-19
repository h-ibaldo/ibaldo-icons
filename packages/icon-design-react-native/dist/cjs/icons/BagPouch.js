'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BagPouch = forwardRef(function BagPouch(
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
    createElement(Path, {"d":"M3.160238702219431,3.999999999998181h17.679522595550225c.640353171760346,0,1.160238702230345.519885530469997,1.160238702230345,1.160238702230345v9.839761297769655c0,2.75957512247-2.24042487753,5-5,5H7c-2.75957512247,0-5-2.24042487753-5-5V5.160238702217612c0-.640353171754324.519885530465107-1.160238702219431,1.160238702219431-1.160238702219431Z","key":"0"}),
    createElement(Line, {"x1":"9","y1":"7.999999999998181","x2":"15","y2":"7.999999999998181","key":"1"})
  );
});

BagPouch.displayName = 'BagPouch';

module.exports = BagPouch;
module.exports.BagPouch = BagPouch;
module.exports.default = BagPouch;
