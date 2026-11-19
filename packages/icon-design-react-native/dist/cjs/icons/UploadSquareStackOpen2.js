'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const UploadSquareStackOpen2 = forwardRef(function UploadSquareStackOpen2(
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
    createElement(Path, {"d":"M14.974731450030959,19.000000000462023c1.656854249492426,0,3-1.343145750509393,3-3v-7c0-1.656854249496064-1.343145750507574-3-3-3H4.974731450030959c-1.656854249494245,0-3,1.343145750503936-3,3v7c0,1.656854249490607,1.343145750505755,3,3,3","key":"0"}),
    createElement(Path, {"d":"M5.974731450030959,6.000000000462023v-1c0-1.656854249496064,1.343145750505755-3,3-3h10c1.656854249492426,0,3,1.343145750503936,3,3v7c0,1.656854249490607-1.343145750511212,3-3,3l-1-.000000000002728","key":"1"}),
    createElement(Polyline, {"points":"12.974731450030959 14.000000000462023 9.974731449356113 11.000000000462023 6.974731450030959 14.000000000462023","key":"2"}),
    createElement(Line, {"x1":"9.974731451106891","y1":"22.000000000462933","x2":"9.974731449356113","y2":"11.000000000462023","key":"3"})
  );
});

UploadSquareStackOpen2.displayName = 'UploadSquareStackOpen2';

module.exports = UploadSquareStackOpen2;
module.exports.UploadSquareStackOpen2 = UploadSquareStackOpen2;
module.exports.default = UploadSquareStackOpen2;
