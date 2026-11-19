'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const PencilCurved = forwardRef(function PencilCurved(
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
    createElement(Path, {"d":"M19.242640687120002,2.67157288315866l2.171572875249694,2.171572875249694c.781048583499796.781048583488882.78104858351071,2.047378541228682,0,2.828427124750306l-12.414213562369696,12.414213562369696-7,2,2-7L16.414213562369696,2.67157288315866c.781048583499796-.781048583521624,2.047378541250509-.781048583521624,2.828427124750306,0Z","key":"0"}),
    createElement(Path, {"d":"M6.666748046869543,20.752534492388804l-.08464081521015-.338532268200652c-.358301090909663-1.433073165899259-1.477249844429025-2.552021919418621-2.910323010330103-2.910323010339198l-.338532268209747-.08464081521015","key":"1"}),
    createElement(Line, {"x1":"14","y1":"5.085786445528356","x2":"19","y2":"10.085786445528356","key":"2"})
  );
});

PencilCurved.displayName = 'PencilCurved';

module.exports = PencilCurved;
module.exports.PencilCurved = PencilCurved;
module.exports.default = PencilCurved;
