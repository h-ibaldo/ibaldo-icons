'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon } = RNSvg;

const TabXCenterStep = forwardRef(function TabXCenterStep(
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
    createElement(Polygon, {"points":"22.025268532079281 21.998779297172405 2.025268532079281 21.998779297172405 2.025268532079281 1.998779297172405 11.025268532079281 1.998779297172405 11.025268532079281 5.998779297172405 22.025268532079281 5.998779297172405 22.025268532079281 21.998779297172405","key":"0"}),
    createElement(Line, {"x1":"22.025268532079281","y1":"1.998779297172405","x2":"15.025268532079281","y2":"1.998779297172405","key":"1"}),
    createElement(Line, {"x1":"15.025268532079281","y1":"16.998779297172405","x2":"9.025268532079281","y2":"10.998779297172405","key":"2"}),
    createElement(Line, {"x1":"15.025268532079281","y1":"10.998779297172405","x2":"9.025268532079281","y2":"16.998779297172405","key":"3"})
  );
});

TabXCenterStep.displayName = 'TabXCenterStep';

module.exports = TabXCenterStep;
module.exports.TabXCenterStep = TabXCenterStep;
module.exports.default = TabXCenterStep;
