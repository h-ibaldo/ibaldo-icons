'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline } = RNSvg;

const TabDownloadSplit = forwardRef(function TabDownloadSplit(
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
    createElement(Polyline, {"points":"11.999999993611709 21.998779299956368 1.999999993611709 21.998779299956368 1.999999993611709 1.998779299956368 10.999999993611709 1.998779299956368 10.999999993611709 5.998779299956368 21.999999993611709 5.998779299956368 21.999999993611709 11.998779299956368","key":"0"}),
    createElement(Line, {"x1":"21.999999993611709","y1":"1.998779299956368","x2":"14.999999993611709","y2":"1.998779299956368","key":"1"}),
    createElement(Polyline, {"points":"21.999999993611709 18.998779299956368 18.999999993611709 21.998779299956368 15.999999993611709 18.998779299956368","key":"2"}),
    createElement(Line, {"x1":"18.999999993611709","y1":"14.998779299956368","x2":"18.999999993611709","y2":"21.998779299956368","key":"3"})
  );
});

TabDownloadSplit.displayName = 'TabDownloadSplit';

module.exports = TabDownloadSplit;
module.exports.TabDownloadSplit = TabDownloadSplit;
module.exports.default = TabDownloadSplit;
