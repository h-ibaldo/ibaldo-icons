'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { G, Line, Polyline } = RNSvg;

const CapsLockOffFlat = forwardRef(function CapsLockOffFlat(
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
    createElement(Line, {"x1":"6.999999977100742","y1":"21.999996563434252","x2":"16.999999977100742","y2":"21.999996563434252","key":"0"}),
    createElement(Line, {"x1":"20.999999977100742","y1":"2.999996563434252","x2":"2.999999977100742","y2":"20.999996563434252","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Polyline, {"points":"16.761901832569492 7.238094707965502 11.999999977100742 1.999996563434252 1.999999977100742 12.999996563434252 6.999999977100742 12.999996563434252 6.999999977100742 16.999996563434252","key":"0"}),
      createElement(Polyline, {"points":"10.999999977100742 17.999996563434252 16.999999977100742 17.999996563434252 16.999999977100742 12.999996563434252 21.999999977100742 12.999996563434252 19.142883277880173 9.857113262653002","key":"1"}))
  );
});

CapsLockOffFlat.displayName = 'CapsLockOffFlat';

module.exports = CapsLockOffFlat;
module.exports.CapsLockOffFlat = CapsLockOffFlat;
module.exports.default = CapsLockOffFlat;
