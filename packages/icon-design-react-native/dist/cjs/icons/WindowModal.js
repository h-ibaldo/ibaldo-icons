'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Rect } = RNSvg;

const WindowModal = forwardRef(function WindowModal(
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
    createElement(Rect, {"x":"2","y":"2","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement(Line, {"x1":"2","y1":"8","x2":"22","y2":"8","key":"1"}),
    createElement(Line, {"x1":"5.010000000000218","y1":"5","x2":"5","y2":"5","key":"2"}),
    createElement(Line, {"x1":"8.010000000000218","y1":"5","x2":"8","y2":"5","key":"3"}),
    createElement(Line, {"x1":"11.010000000000218","y1":"5","x2":"11","y2":"5","key":"4"}),
    createElement(Rect, {"x":"9","y":"12","width":"10","height":"7","rx":".853912563829908","ry":".853912563829908","key":"5"})
  );
});

WindowModal.displayName = 'WindowModal';

module.exports = WindowModal;
module.exports.WindowModal = WindowModal;
module.exports.default = WindowModal;
