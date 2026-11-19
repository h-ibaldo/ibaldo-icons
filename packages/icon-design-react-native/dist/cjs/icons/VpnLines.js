'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const VpnLines = forwardRef(function VpnLines(
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
    createElement(Line, {"x1":"2.016630450972116","y1":"4.000000000480213","x2":"22.016630450972116","y2":"4.000000000480213","key":"0"}),
    createElement(Line, {"x1":"2.016630450972116","y1":"20.000000000480213","x2":"22.016630450972116","y2":"20.000000000480213","key":"1"}),
    createElement(Polyline, {"points":"2.016630450972116 8.000000000480213 4.516630450972116 16.000000000480213 7.016630450972116 8.000000000480213","key":"2"}),
    createElement(Line, {"x1":"10.516630450972116","y1":"8.000000000476575","x2":"10.516630450972116","y2":"16.000000000480213","key":"3"}),
    createElement(Path, {"d":"M10.516630450972116,8.000000000476575h2c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.104569499661011-.895430500338989,2-2,2h-2","key":"4"}),
    createElement(Polyline, {"points":"22.016630450972116 8.000000000480213 22.016630450972116 16.000000000480213 18.016630450972116 8.000000000476575 18.016630450972116 16.000000000476575","key":"5"})
  );
});

VpnLines.displayName = 'VpnLines';

module.exports = VpnLines;
module.exports.VpnLines = VpnLines;
module.exports.default = VpnLines;
