'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListTree = forwardRef(function ListTree(
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
    createElement(Path, {"d":"M6 4L22 4","key":"0"}),
    createElement(Path, {"d":"M12 12L22 12","key":"1"}),
    createElement(Path, {"d":"M2 8L2 17C2 18.656 3.344 20 5 20L8 20","key":"2"}),
    createElement(Path, {"d":"M2 4L2 9C2 10.656 3.344 12 5 12L8 12","key":"3"}),
    createElement(Path, {"d":"M12 20L22 20","key":"4"})
  );
});

ListTree.displayName = 'ListTree';

module.exports = ListTree;
module.exports.ListTree = ListTree;
module.exports.default = ListTree;
