'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const BrowserDownload = forwardRef(function BrowserDownload(
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
    createElement(Path, {"d":"M4.999999993642632,21.998779299956368h-1c-1.104569499659192,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500340808,2-2,2h-1","key":"0"}),
    createElement(Line, {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368","key":"1"}),
    createElement(Line, {"x1":"5.00999999364285","y1":"4.998779299956368","x2":"4.999999993642632","y2":"4.998779299956368","key":"2"}),
    createElement(Line, {"x1":"8.00999999364285","y1":"4.998779299956368","x2":"7.999999993642632","y2":"4.998779299956368","key":"3"}),
    createElement(Line, {"x1":"19","y1":"4.998779299956368","x2":"10.999999993642632","y2":"4.998779299956368","key":"4"}),
    createElement(Polyline, {"points":"14.99999999350257 18.998779300225578 11.999999993233359 21.998779299956368 8.99999999350257 18.998779299687158","key":"5"}),
    createElement(Line, {"x1":"11.999999993233359","y1":"21.998779299956368","x2":"11.99999999404281","y2":"12.998779299956368","key":"6"})
  );
});

BrowserDownload.displayName = 'BrowserDownload';

module.exports = BrowserDownload;
module.exports.BrowserDownload = BrowserDownload;
module.exports.default = BrowserDownload;
