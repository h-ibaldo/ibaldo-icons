'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const DownloadSquareStackOpen = forwardRef(function DownloadSquareStackOpen(
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
    createElement(Path, {"d":"M12.974731450026411,4.000000000462023c1.656854249493335,0,3,1.343145750503936,3,3v7c0,1.656854249490607-1.343145750506665,3-3,3H4.974731450026411c-1.656854249492426,0-3-1.343145750509393-3-3v-7c0-1.656854249496064,1.343145750507574-3,3-3","key":"0"}),
    createElement(Path, {"d":"M7.974731450026411,17.000000000462023v2c0,1.656854249490607,1.343145750507574,3.000000000000909,3,3.000000000000909h8c1.656854249493335,0,3-1.343145750510303,3-3.000000000000909v-7c0-1.656854249496064-1.343145750509393-3-3-3h-3","key":"1"}),
    createElement(Polyline, {"points":"11.974731450026411 9.000000000462023 8.974731449353385 12.000000000462023 5.974731450026411 9.000000000462023","key":"2"}),
    createElement(Line, {"x1":"8.974731451103253","y1":"2.000000000462023","x2":"8.974731449353385","y2":"12.000000000462023","key":"3"})
  );
});

DownloadSquareStackOpen.displayName = 'DownloadSquareStackOpen';

module.exports = DownloadSquareStackOpen;
module.exports.DownloadSquareStackOpen = DownloadSquareStackOpen;
module.exports.default = DownloadSquareStackOpen;
