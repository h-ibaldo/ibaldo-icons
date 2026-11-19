'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line } = RNSvg;

const AdjustTick = forwardRef(function AdjustTick(
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
    createElement(Line, {"x1":"15.999999990303877","y1":"12.000000000667569","x2":"1.999999990620381","y2":"12.000000000170985","key":"0"}),
    createElement(Line, {"x1":"21.999999990619472","y1":"12.000000001068656","x2":"19.999999990303877","y2":"12.000000000937689","key":"1"}),
    createElement(Line, {"x1":"11.999999990303877","y1":"19.000000000578439","x2":"21.999999990297511","y2":"19.000000001068656","key":"2"}),
    createElement(Line, {"x1":"1.999999990303877","y1":"19.000000000170985","x2":"7.999999990303877","y2":"19.000000000308319","key":"3"}),
    createElement(Line, {"x1":"11.999999990303877","y1":"4.999999999948159","x2":"21.99999999092779","y2":"5.000000000439286","key":"4"}),
    createElement(Line, {"x1":"1.999999990933247","y1":"5.000000000170985","x2":"7.999999990303877","y2":"5.000000000308319","key":"5"}),
    createElement(Line, {"x1":"7.999999990303877","y1":"2.000000000439286","x2":"7.999999990303877","y2":"8.000000000439286","key":"6"}),
    createElement(Line, {"x1":"15.999999990303877","y1":"9.000000000439286","x2":"15.999999990303877","y2":"15.000000000439286","key":"7"}),
    createElement(Line, {"x1":"7.999999990303877","y1":"16.000000000439286","x2":"7.999999990303877","y2":"22.000000000439286","key":"8"})
  );
});

AdjustTick.displayName = 'AdjustTick';

module.exports = AdjustTick;
module.exports.AdjustTick = AdjustTick;
module.exports.default = AdjustTick;
