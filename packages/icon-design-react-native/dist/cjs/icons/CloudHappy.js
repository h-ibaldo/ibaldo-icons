'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const CloudHappy = forwardRef(function CloudHappy(
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
    createElement(Line, {"x1":"9.999999999996362","y1":"11.499999999718057","x2":"9.999999999996362","y2":"10.499999999718057","key":"0"}),
    createElement(Line, {"x1":"13.999999999996362","y1":"11.499999999718057","x2":"13.999999999996362","y2":"10.499999999718057","key":"1"}),
    createElement(Path, {"d":"M8.999999999996362,14.690734862988393c.88323974609375.51165771486103,1.90582275390625.809265136729664,3,.809265136729664s2.11676025390625-.297607421868634,3-.809265136729664","key":"2"}),
    createElement(Path, {"d":"M17.999999999996362,10.999999999718057h-.02520751953125c.014892578125-.164916992180224.02520751953125-.331176757810681.02520751953125-.5,0-3.037536621090112-2.46246337890625-5.5-5.5-5.5-2.13836669921875,0-3.98736572265625,1.222900390631366-4.89727783203125,3.005187988270336-.0345458984375-.000610351560681-.06805419921875-.005187988270336-.10272216796875-.005187988270336-3.03753662109375,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.46246337890625,5.5,5.5,5.5h10.5c2.20916748046875,0,4-1.790832519540345,4-4,0-2.209167480479664-1.79083251953125-4-4-4Z","key":"3"})
  );
});

CloudHappy.displayName = 'CloudHappy';

module.exports = CloudHappy;
module.exports.CloudHappy = CloudHappy;
module.exports.default = CloudHappy;
