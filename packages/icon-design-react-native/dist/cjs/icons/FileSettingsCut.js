'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileSettingsCut = forwardRef(function FileSettingsCut(
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
    createElement(Path, {"d":"M19.5 17C19.5 18.933 17.933 20.5 16 20.5C14.067 20.5 12.5 18.933 12.5 17C12.5 15.067 14.067 13.5 16 13.5C17.933 13.5 19.5 15.067 19.5 17Z","key":"0"}),
    createElement(Path, {"d":"M16 17L16 17","key":"1"}),
    createElement(Path, {"d":"M16 12L16 13.5","key":"2"}),
    createElement(Path, {"d":"M16 20.5L16 22","key":"3"}),
    createElement(Path, {"d":"M21 17L19.5 17","key":"4"}),
    createElement(Path, {"d":"M12.5 17L11 17","key":"5"}),
    createElement(Path, {"d":"M19.536 20.536L18.475 19.475","key":"6"}),
    createElement(Path, {"d":"M13.525 14.525L12.464 13.464","key":"7"}),
    createElement(Path, {"d":"M12.464 20.536L13.525 19.475","key":"8"}),
    createElement(Path, {"d":"M18.475 14.525L19.536 13.464","key":"9"}),
    createElement(Path, {"d":"M20 10L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L9 22","key":"10"})
  );
});

FileSettingsCut.displayName = 'FileSettingsCut';

module.exports = FileSettingsCut;
module.exports.FileSettingsCut = FileSettingsCut;
module.exports.default = FileSettingsCut;
