'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MicrophoneBan = forwardRef(function MicrophoneBan(
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
    createElement(Path, {"d":"M8 18L8 22","key":"0"}),
    createElement(Path, {"d":"M12 22L4 22","key":"1"}),
    createElement(Path, {"d":"M20.535 10.465C18.582 8.512 15.418 8.512 13.465 10.465C11.512 12.418 11.512 15.582 13.465 17.535C15.418 19.488 18.582 19.488 20.535 17.535C22.488 15.582 22.488 12.418 20.535 10.465Z","key":"2"}),
    createElement(Path, {"d":"M2 15C3.461 16.828 5.703 18 8.227 18C8.836 18 9.43 17.93 10 17.801","key":"3"}),
    createElement(Path, {"d":"M12 7L12 6C12 3.789 10.211 2 8 2C5.789 2 4 3.789 4 6L4 10C4 12.211 5.789 14 8 14","key":"4"}),
    createElement(Path, {"d":"M13.465 17.535L20.535 10.465","key":"5"})
  );
});

MicrophoneBan.displayName = 'MicrophoneBan';

module.exports = MicrophoneBan;
module.exports.MicrophoneBan = MicrophoneBan;
module.exports.default = MicrophoneBan;
