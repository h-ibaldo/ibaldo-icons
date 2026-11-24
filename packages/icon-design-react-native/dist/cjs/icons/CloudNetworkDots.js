'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const CloudNetworkDots = forwardRef(function CloudNetworkDots(
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
    createElement(Line, {"x1":"7","y1":"21.999999999718057","x2":"17","y2":"21.999999999718057","key":"0"}),
    createElement(Line, {"x1":"12","y1":"16.999999999718057","x2":"12","y2":"21.999999999718057","key":"1"}),
    createElement(Line, {"x1":"19.989999999999782","y1":"21.999999999718057","x2":"20","y2":"21.999999999718057","key":"2"}),
    createElement(Line, {"x1":"4.010000000000218","y1":"21.999999999718057","x2":"4","y2":"21.999999999718057","key":"3"}),
    createElement(Path, {"d":"M18,8.999999999718057h-.025207519530341c.014892578120453-.164916992180224.025207519530341-.331176757810681.025207519530341-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699219659,0-3.987365722659888,1.222900390631366-4.897277832030341,3.005187988270336-.034545898439319-.000610351560681-.068054199219659-.005187988270336-.102722167969659-.005187988270336-3.037536621100116,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.462463378899884,5.5,5.5,5.5h10.5c2.209167480469659,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519530341-4-4-4Z","key":"4"})
  );
});

CloudNetworkDots.displayName = 'CloudNetworkDots';

module.exports = CloudNetworkDots;
module.exports.CloudNetworkDots = CloudNetworkDots;
module.exports.default = CloudNetworkDots;
