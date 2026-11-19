'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileNetworkCut = forwardRef(function FileNetworkCut(
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
    createElement(Path, {"d":"M4 22L20 22","key":"0"}),
    createElement(Path, {"d":"M12 18L12 22","key":"1"}),
    createElement(Path, {"d":"M7 18L17 18C18.105 18 19 17.105 19 16L19 7.243C19 6.447 18.684 5.684 18.121 5.121L15.879 2.879C15.316 2.316 14.553 2 13.757 2L7 2C5.895 2 5 2.895 5 4L5 16C5 17.105 5.895 18 7 18Z","key":"2"})
  );
});

FileNetworkCut.displayName = 'FileNetworkCut';

module.exports = FileNetworkCut;
module.exports.FileNetworkCut = FileNetworkCut;
module.exports.default = FileNetworkCut;
