'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileEdit = forwardRef(function FileEdit(
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
    createElement(Path, {"d":"M21.707 8.879L20.121 7.293C19.731 6.902 19.098 6.902 18.707 7.293L11 15L11 18L14 18L21.707 10.293C22.098 9.902 22.098 9.269 21.707 8.879Z","key":"0"}),
    createElement(Path, {"d":"M18 4L18 4C18 2.895 17.105 2 16 2L7.828 2C7.298 2 6.789 2.211 6.414 2.586L2.586 6.414C2.211 6.789 2 7.298 2 7.828L2 20C2 21.105 2.895 22 4 22L16 22C17.105 22 18 21.105 18 20L18 19","key":"1"}),
    createElement(Path, {"d":"M8 2L8 7C8 7.552 7.552 8 7 8L2 8","key":"2"})
  );
});

FileEdit.displayName = 'FileEdit';

module.exports = FileEdit;
module.exports.FileEdit = FileEdit;
module.exports.default = FileEdit;
