'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const TrayUploadTall = forwardRef(function TrayUploadTall(
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
    createElement(Polyline, {"points":"6.974731449729006 8.000000000258296 11.974731449954561 3.000000000479304 16.974731449729006 8.000000000705768","key":"0"}),
    createElement(Line, {"x1":"11.974731449368846","y1":"16.000000000480213","x2":"11.974731449954561","y2":"3.000000000479304","key":"1"}),
    createElement(Path, {"d":"M21.974731449550745,3.000000001376975l-.000000000361979,14.999999999554348c-.00000000007276,1.656854249493335-1.343145750642179,2.999999999939064-3.000000000135515,2.999999999865395l-14-.00000000062937c-1.656854249490607-.000000000074579-2.999999999937245-1.34314575064127-2.999999999864485-3.000000000134605l.000000000361979-14.999999999553438","key":"2"})
  );
});

TrayUploadTall.displayName = 'TrayUploadTall';

module.exports = TrayUploadTall;
module.exports.TrayUploadTall = TrayUploadTall;
module.exports.default = TrayUploadTall;
