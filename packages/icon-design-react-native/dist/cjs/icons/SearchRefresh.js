'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const SearchRefresh = forwardRef(function SearchRefresh(
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
    createElement(Line, {"x1":"15.656860356561083","y1":"15.65686035545059","x2":"22.000000005000402","y2":"22.000000003886271","key":"0"}),
    createElement(Polyline, {"points":"6.000000005000402 13.000000003886271 6.000000004729372 17.00000000352793 2.000000005000402 17.000000003886271","key":"1"}),
    createElement(Path, {"d":"M10.000000005000402,18.000000003886271c4.418273925779431,0,8-3.581726074217841,8-8,0-4.418273925780341-3.581726074220569-8-8-8S2.000000005000402,5.58172607810593,2.000000005000402,10.000000003886271c0,2.959411621094659,1.611083984380457,5.537170410157159,4,6.921020507814319","key":"2"})
  );
});

SearchRefresh.displayName = 'SearchRefresh';

module.exports = SearchRefresh;
module.exports.SearchRefresh = SearchRefresh;
module.exports.default = SearchRefresh;
