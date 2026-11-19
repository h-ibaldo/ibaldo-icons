'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Rect } = RNSvg;

const Mail = forwardRef(function Mail(
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
    createElement(Rect, {"x":"2.000000000224645","y":"5.032754075946286","width":"20","height":"14","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M2.619750976787145,5.590493333755148l8.711282688577739,7.840188429130649c.380305456468705.342276395560475.957627213248998.342276395560475,1.337932669717702,0l8.711282688579558-7.840188429130649","key":"1"})
  );
});

Mail.displayName = 'Mail';

module.exports = Mail;
module.exports.Mail = Mail;
module.exports.default = Mail;
