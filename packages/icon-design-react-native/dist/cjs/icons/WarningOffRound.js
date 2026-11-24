'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const WarningOffRound = forwardRef(function WarningOffRound(
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
    createElement(Line, {"x1":"12.000000004469257","y1":"17.01000000388558","x2":"12.000000004469257","y2":"17.000000003885361","key":"0"}),
    createElement(Line, {"x1":"12.000000004469257","y1":"9.000000003885361","x2":"12.000000004469257","y2":"12.000000003885361","key":"1"}),
    createElement(Line, {"x1":"2.000000004469257","y1":"22.000000003885361","x2":"22.000000004469257","y2":"2.000000003886271","key":"2"}),
    createElement(Path, {"d":"M16.363647465399481,7.636352542952409l-1.758911132808862-3.078063964846478c-1.15167236328125-2.015441894530341-4.057800292959655-2.015441894530341-5.20947265625,0l-6.830444335941138,11.953308105471478c-.828979492180224,1.450744628901703-.29296875,3.153930664057953.941101074231483,3.982482910151703","key":"3"}),
    createElement(Path, {"d":"M9.000000004469257,21.000000003885361h9.830444335930224c2.303466796869543,0,3.74755859375-2.48846435546875,2.604736328119543-4.488403320307953l-2.88970947263806-5.057067871098297","key":"4"})
  );
});

WarningOffRound.displayName = 'WarningOffRound';

module.exports = WarningOffRound;
module.exports.WarningOffRound = WarningOffRound;
module.exports.default = WarningOffRound;
