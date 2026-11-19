'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const AdjustBlock = forwardRef(function AdjustBlock(
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
    createElement(Line, {"x1":"9.999999990754077","y1":"4.99999999973079","x2":"21.99999999074862","y2":"5.000000000439286","key":"0"}),
    createElement(Line, {"x1":"1.999999990756805","y1":"5.000000000170985","x2":"4.999999990754077","y2":"5.000000000308319","key":"1"}),
    createElement(Rect, {"x":"4.999999990754077","y":"1.99999999973079","width":"4.999999999999091","height":"6","rx":"1","ry":"1","key":"2"}),
    createElement(Rect, {"x":"13.999999990754077","y":"8.99999999973079","width":"4.999999999999091","height":"6","rx":"1","ry":"1","key":"3"}),
    createElement(Line, {"x1":"9.999999990754077","y1":"18.99999999973079","x2":"21.99999999074862","y2":"19.000000000439286","key":"4"}),
    createElement(Line, {"x1":"1.999999990756805","y1":"19.000000000170985","x2":"4.999999990754077","y2":"19.000000000308319","key":"5"}),
    createElement(Rect, {"x":"4.999999990754077","y":"15.99999999973079","width":"4.999999999999091","height":"6","rx":"1","ry":"1","key":"6"}),
    createElement(Line, {"x1":"13.999999990574906","y1":"12.000000000627551","x2":"1.999999990754077","y2":"11.999999998838575","key":"7"}),
    createElement(Line, {"x1":"21.99999999074862","y1":"11.999999999929969","x2":"18.999999990574906","y2":"11.999999999527972","key":"8"})
  );
});

AdjustBlock.displayName = 'AdjustBlock';

module.exports = AdjustBlock;
module.exports.AdjustBlock = AdjustBlock;
module.exports.default = AdjustBlock;
