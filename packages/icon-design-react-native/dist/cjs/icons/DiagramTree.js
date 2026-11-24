'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const DiagramTree = forwardRef(function DiagramTree(
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
    createElement(Rect, {"x":"2.016630450973025","y":"17.000000000480213","width":"4","height":"4","key":"0"}),
    createElement(Rect, {"x":"10.016630450973025","y":"17.000000000480213","width":"4","height":"4","key":"1"}),
    createElement(Rect, {"x":"10.016630450973025","y":"3.000000000480213","width":"4","height":"4","key":"2"}),
    createElement(Rect, {"x":"18.016630450973025","y":"17.000000000480213","width":"4","height":"4","key":"3"}),
    createElement(Polyline, {"points":"4.016630450971206 17.000000000480213 4.016630450971206 12.000000000480213 20.016630450971206 12.000000000480213 20.016630450971206 17.000000000480213","key":"4"}),
    createElement(Line, {"x1":"12.016630450971206","y1":"7.000000000480213","x2":"12.016630450971206","y2":"17.000000000480213","key":"5"})
  );
});

DiagramTree.displayName = 'DiagramTree';

module.exports = DiagramTree;
module.exports.DiagramTree = DiagramTree;
module.exports.default = DiagramTree;
