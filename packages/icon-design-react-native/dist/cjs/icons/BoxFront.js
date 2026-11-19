'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BoxFront = forwardRef(function BoxFront(
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
    createElement(Path, {"d":"M21,21.999999999998181H3c-.552284749830505,0-1-.447715250169495-1-1V7.350781059358269c0-.227071495221026.077280752049774-.447381999430945.219131190559892-.624695047559726l3.480624847480613-4.350781059349174c.189772186729897-.237215233421011.477085087339219-.375304952451188.780868809449203-.375304952451188h11.038750020310545c.303783884300174,0,.591096920089512.138089865809889.780869098410221.375305313658828l3.480625132199748,4.350785541020741c.141850257369697.177312989850179.219130901589779.397623349790592.219130901589779.624694686339353v13.649214458981078c0,.552284749830505-.447715250169495,1-1,1Z","key":"0"}),
    createElement(Line, {"x1":"2","y1":"8.000004741406883","x2":"22","y2":"8.000004741406883","key":"1"}),
    createElement(Line, {"x1":"12","y1":"1.999999999998181","x2":"12","y2":"7.999999999998181","key":"2"})
  );
});

BoxFront.displayName = 'BoxFront';

module.exports = BoxFront;
module.exports.BoxFront = BoxFront;
module.exports.default = BoxFront;
