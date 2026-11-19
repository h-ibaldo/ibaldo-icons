'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const WindowCloudCenterBare = forwardRef(function WindowCloudCenterBare(
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
    createElement(Rect, {"x":"2.00000000018008","y":"2.00000000044929","width":"20","height":"20","rx":"2.000000000000045","ry":"2.000000000000045","key":"0"}),
    createElement(Path, {"d":"M15.230769230949591,12.76923076967978h-.046536959140212c-.225698617779926-1.563720703125-1.558030348538523-2.769230769231399-3.184232271629298-2.769230769231399-1.626201923068948,0-2.958533653840277,1.205510066106399-3.184232271631117,2.769230769231399h-.046536959138393c-1.52940955529084,0-2.769230769230489,1.239821213942378-2.769230769230489,2.76923076922958s1.239821213939649,2.769230769230489,2.769230769230489,2.769230769230489h6.461538461539021c1.529409555299935,0,2.769230769230489-1.239821213943287,2.769230769230489-2.769230769230489s-1.239821213930554-2.76923076922958-2.769230769230489-2.76923076922958Z","key":"1"}),
    createElement(Line, {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"2"}),
    createElement(Line, {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement(Line, {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"4"})
  );
});

WindowCloudCenterBare.displayName = 'WindowCloudCenterBare';

module.exports = WindowCloudCenterBare;
module.exports.WindowCloudCenterBare = WindowCloudCenterBare;
module.exports.default = WindowCloudCenterBare;
