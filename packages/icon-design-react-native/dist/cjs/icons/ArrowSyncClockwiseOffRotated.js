'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const ArrowSyncClockwiseOffRotated = forwardRef(function ArrowSyncClockwiseOffRotated(
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
    createElement(Polyline, {"points":"11.00000000036016 2 13.00000000036016 4 11.00000000036016 6","key":"0"}),
    createElement(Polyline, {"points":"13.000000000178261 22 11.00000000036016 19.999999999818101 13.000000000538421 18","key":"1"}),
    createElement(Line, {"x1":"4","y1":"20","x2":"20","y2":"4","key":"2"}),
    createElement(Path, {"d":"M12,20c4.41827392578125,0,8-3.581787109371362,8-8,0-2.209106445310681-.90277099609375-4.201904296871362-2.350463867189319-5.649536132810681","key":"3"}),
    createElement(Path, {"d":"M12,4c-4.41827392578125,0-8,3.581787109378638-8,8,0,2.209106445308862.90277099609375,4.201904296878638,2.350463867185681,5.649536132808862","key":"4"})
  );
});

ArrowSyncClockwiseOffRotated.displayName = 'ArrowSyncClockwiseOffRotated';

module.exports = ArrowSyncClockwiseOffRotated;
module.exports.ArrowSyncClockwiseOffRotated = ArrowSyncClockwiseOffRotated;
module.exports.default = ArrowSyncClockwiseOffRotated;
