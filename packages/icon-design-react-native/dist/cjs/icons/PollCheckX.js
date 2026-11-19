'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const PollCheckX = forwardRef(function PollCheckX(
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
    createElement(Polyline, {"points":"2.025268533960116 21.99999999837928 2.025268534449424 8.999999998652129 6.025268534449424 8.99999999883039 6.025268533960116 21.999999998557541","key":"0"}),
    createElement(Polyline, {"points":"10.025268533960116 21.999999998735802 10.025268534140196 17.99999999873944 14.025268534140196 17.999999998917701 14.025268533960116 21.999999998917701","key":"1"}),
    createElement(Polyline, {"points":"18.025268533960116 21.999999999095962 18.025268534320276 13.999999999095962 22.025268534320276 13.999999999274223 22.025268533960116 21.999999999274223","key":"2"}),
    createElement(Polyline, {"points":"2.025268534360293 2.99999999873944 4.025268534280258 4.99999999883039 7.025268534409406 1.999999998968633","key":"3"}),
    createElement(Line, {"x1":"14.025268534320276","y1":"13.999999998917701","x2":"10.025268534500356","y2":"9.999999998735802","key":"4"}),
    createElement(Line, {"x1":"10.025268534320276","y1":"13.999999998735802","x2":"14.025268534500356","y2":"9.999999998917701","key":"5"}),
    createElement(Line, {"x1":"22.025268534500356","y1":"9.999999999277861","x2":"18.025268534680436","y2":"5.999999999095962","key":"6"}),
    createElement(Line, {"x1":"18.025268534500356","y1":"9.999999999095962","x2":"22.025268534680436","y2":"5.999999999277861","key":"7"})
  );
});

PollCheckX.displayName = 'PollCheckX';

module.exports = PollCheckX;
module.exports.PollCheckX = PollCheckX;
module.exports.default = PollCheckX;
