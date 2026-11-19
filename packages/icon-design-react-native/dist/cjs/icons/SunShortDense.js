'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line } = RNSvg;

const SunShortDense = forwardRef(function SunShortDense(
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
    createElement(Circle, {"cx":"12","cy":"12.000000005924448","r":"4","key":"0"}),
    createElement(Line, {"x1":"12","y1":"21.000000005924448","x2":"12","y2":"22.000000005924448","key":"1"}),
    createElement(Line, {"x1":"12","y1":"2.000000005924448","x2":"12","y2":"3.000000005924448","key":"2"}),
    createElement(Line, {"x1":"3","y1":"12.000000005924448","x2":"2","y2":"12.000000005924448","key":"3"}),
    createElement(Line, {"x1":"22","y1":"12.000000005924448","x2":"21","y2":"12.000000005924448","key":"4"}),
    createElement(Line, {"x1":"16.499999999881766","y1":"19.794228640052097","x2":"16.999999999870852","y2":"20.660254043843452","key":"5"}),
    createElement(Line, {"x1":"7.000000000129148","y1":"3.339745968005445","x2":"7.500000000116415","y2":"4.205771371798619","key":"6"}),
    createElement(Line, {"x1":"4.205771365872351","y1":"16.500000005808033","x2":"3.339745962080997","y2":"17.0000000057953","key":"7"}),
    createElement(Line, {"x1":"20.660254037919003","y1":"7.000000006053597","x2":"19.794228634127649","y2":"7.500000006042683","key":"8"}),
    createElement(Line, {"x1":"19.794228633923922","y1":"16.500000006159098","x2":"20.660254037693448","y2":"17.000000006184564","key":"9"}),
    createElement(Line, {"x1":"3.339745962304733","y1":"7.000000005666152","x2":"4.205771366074259","y2":"7.500000005691618","key":"10"}),
    createElement(Line, {"x1":"7.49999999976535","y1":"19.794228639850189","x2":"6.999999999739885","y2":"20.660254043619716","key":"11"}),
    createElement(Line, {"x1":"17.000000000258296","y1":"3.339745968231","x2":"16.50000000023465","y2":"4.205771371998708","key":"12"})
  );
});

SunShortDense.displayName = 'SunShortDense';

module.exports = SunShortDense;
module.exports.SunShortDense = SunShortDense;
module.exports.default = SunShortDense;
