'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const CertificateTall = forwardRef(function CertificateTall(
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
    createElement(Path, {"d":"M14 14C14 15.656 12.656 17 11 17C9.344 17 8 15.656 8 14C8 12.344 9.344 11 11 11C12.656 11 14 12.344 14 14Z","key":"0"}),
    createElement(Path, {"d":"M6 20L5 20C4.449 20 4 19.551 4 19L4 3C4 2.449 4.449 2 5 2L19 2C19.551 2 20 2.449 20 3L20 19C20 19.551 19.551 20 19 20L16 20","key":"1"}),
    createElement(Path, {"d":"M8 6L16 6","key":"2"}),
    createElement(Path, {"d":"M9 16.223L9 22L11 21L13 22L13 16.223","key":"3"})
  );
});

CertificateTall.displayName = 'CertificateTall';

module.exports = CertificateTall;
module.exports.CertificateTall = CertificateTall;
module.exports.default = CertificateTall;
