'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const DownloadSquareStackOpen2 = forwardRef(function DownloadSquareStackOpen2(
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
    createElement(Path, {"d":"M14.974731450030959,5.000000000462023c1.656854249490607,0,3,1.343145750503936,3,3v7c0,1.656854249490607-1.343145750509393,3-3,3H4.974731450030959c-1.656854249496064,0-3-1.343145750509393-3-3v-7c0-1.656854249496064,1.343145750503936-3,3-3","key":"0"}),
    createElement(Path, {"d":"M5.974731450030959,18.000000000462023v1c0,1.656854249490607,1.343145750503936,3.000000000000909,3,3.000000000000909h10c1.656854249490607,0,3-1.343145750510303,3-3.000000000000909v-7c0-1.656854249496064-1.343145750511212-3-3-3h-1","key":"1"}),
    createElement(Polyline, {"points":"12.974731450030959 10.000000000462023 9.974731449356113 13.000000000462023 6.974731450030959 10.000000000462023","key":"2"}),
    createElement(Line, {"x1":"9.974731451105981","y1":"2.000000000462023","x2":"9.974731449356113","y2":"13.000000000462023","key":"3"})
  );
});

DownloadSquareStackOpen2.displayName = 'DownloadSquareStackOpen2';

module.exports = DownloadSquareStackOpen2;
module.exports.DownloadSquareStackOpen2 = DownloadSquareStackOpen2;
module.exports.default = DownloadSquareStackOpen2;
