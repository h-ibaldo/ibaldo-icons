'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileSettingsPlain = forwardRef(function FileSettingsPlain(
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
    createElement(Path, {"d":"M19.5 17.034C19.5 18.967 17.933 20.534 16 20.534C14.067 20.534 12.5 18.967 12.5 17.034C12.5 15.101 14.067 13.534 16 13.534C17.933 13.534 19.5 15.101 19.5 17.034Z","key":"0"}),
    createElement(Path, {"d":"M16 17.034L16 17.034","key":"1"}),
    createElement(Path, {"d":"M16 12.034L16 13.534","key":"2"}),
    createElement(Path, {"d":"M16 20.534L16 22.034","key":"3"}),
    createElement(Path, {"d":"M21 17.034L19.5 17.034","key":"4"}),
    createElement(Path, {"d":"M12.5 17.034L11 17.034","key":"5"}),
    createElement(Path, {"d":"M19.536 20.569L18.475 19.509","key":"6"}),
    createElement(Path, {"d":"M13.525 14.559L12.464 13.498","key":"7"}),
    createElement(Path, {"d":"M12.464 20.569L13.525 19.509","key":"8"}),
    createElement(Path, {"d":"M18.475 14.559L19.536 13.498","key":"9"}),
    createElement(Path, {"d":"M20 10.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L9 22.034","key":"10"})
  );
});

FileSettingsPlain.displayName = 'FileSettingsPlain';

module.exports = FileSettingsPlain;
module.exports.FileSettingsPlain = FileSettingsPlain;
module.exports.default = FileSettingsPlain;
