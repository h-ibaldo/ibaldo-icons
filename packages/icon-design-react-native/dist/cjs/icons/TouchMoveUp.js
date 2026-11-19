'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const TouchMoveUp = forwardRef(function TouchMoveUp(
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
    createElement(Polyline, {"points":"9.025268549155953 4.998782739599847 12.025268549155953 1.998782739599847 15.025268549155953 4.998782739599847","key":"0"}),
    createElement(Line, {"x1":"12.025268549155953","y1":"13.998782739599847","x2":"12.025268549155953","y2":"1.998782739599847","key":"1"}),
    createElement(Path, {"d":"M15.025268549155953,10.808047876318597c1.791625976560681,1.037841796875,3,2.97119140625,3,5.19073486328125,0,3.313720703125-2.686279296880457,6-6,6-3.313720703130457,0-6-2.686279296875-6-6,0-2.21954345703125,1.208374023439319-4.15289306640625,3-5.19073486328125","key":"2"})
  );
});

TouchMoveUp.displayName = 'TouchMoveUp';

module.exports = TouchMoveUp;
module.exports.TouchMoveUp = TouchMoveUp;
module.exports.default = TouchMoveUp;
