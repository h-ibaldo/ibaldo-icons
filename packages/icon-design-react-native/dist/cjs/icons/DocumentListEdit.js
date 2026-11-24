'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const DocumentListEdit = forwardRef(function DocumentListEdit(
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
    createElement(Path, {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 8","key":"0"}),
    createElement(Path, {"d":"M6 7L6 7","key":"1"}),
    createElement(Path, {"d":"M16 7L10 7","key":"2"}),
    createElement(Path, {"d":"M6 12L6 12","key":"3"}),
    createElement(Path, {"d":"M12 12L10 12","key":"4"}),
    createElement(Path, {"d":"M6 17L6 17","key":"5"}),
    createElement(Path, {"d":"M20.414 12.414L20.586 12.586C21.367 13.367 21.367 14.633 20.586 15.414L14 22L11 22L11 19L17.586 12.414C18.367 11.633 19.633 11.633 20.414 12.414Z","key":"6"}),
    createElement(Path, {"d":"M16 14L19 17","key":"7"})
  );
});

DocumentListEdit.displayName = 'DocumentListEdit';

module.exports = DocumentListEdit;
module.exports.DocumentListEdit = DocumentListEdit;
module.exports.default = DocumentListEdit;
