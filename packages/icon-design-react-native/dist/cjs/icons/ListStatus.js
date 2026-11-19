'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const ListStatus = forwardRef(function ListStatus(
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
    createElement(Line, {"x1":"11.000000004469257","y1":"3.000000003886271","x2":"22.000000004469257","y2":"3.000000003886271","key":"0"}),
    createElement(Polyline, {"points":"2.000000004469257 3.000000003886271 4.000000004469257 5.000000003886271 7.000000004469257 1.000000003886271","key":"1"}),
    createElement(Line, {"x1":"10.118737004069772","y1":"11.000000003885361","x2":"22.118737004069772","y2":"11.000000003885361","key":"2"}),
    createElement(Line, {"x1":"10.118737004069772","y1":"19.000000003885361","x2":"22.118737004069772","y2":"19.000000003885361","key":"3"}),
    createElement(Line, {"x1":"6.118737004069772","y1":"9.000000003888999","x2":"2.118737004069772","y2":"13.000000003888999","key":"4"}),
    createElement(Line, {"x1":"2.118737003989736","y1":"9.000000003976311","x2":"6.118737004160721","y2":"13.000000003798959","key":"5"}),
    createElement(Line, {"x1":"4.000000004469257","y1":"21.990000003885143","x2":"4.000000004469257","y2":"22.000000003885361","key":"6"}),
    createElement(Path, {"d":"M3.000000004469257,17.000000003885361h1.500001500000508c.828426296309772,0,1.499998499999492.671572203682445,1.499998499999492,1.49999850000404v.000003000001016c0,.828426296316138-.67157220368972,1.499998499994945-1.499998499999492,1.499998499994945h-.500001500000508","key":"7"})
  );
});

ListStatus.displayName = 'ListStatus';

module.exports = ListStatus;
module.exports.ListStatus = ListStatus;
module.exports.default = ListStatus;
