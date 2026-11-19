'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { G, Line, Path } = RNSvg;

const FingerprintDotted = forwardRef(function FingerprintDotted(
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
    createElement(Path, {"d":"M18,13.999999999996362c0-2.209138999198331-1.79086100079985-4-4-4-2.209138999189236,0-4,1.790861000801669-4,4","key":"0"}),
    createElement(Path, {"d":"M18,13.999999999996362c0,2.209138999198331,1.79086100079985,4,4,4","key":"1"}),
    createElement(Path, {"d":"M10,14c0,3.07781982421875,1.168701171880457,5.875854492188409,3.073669433599207,8","key":"2"}),
    createElement(G, {"key":"3"},
      createElement(Path, {"d":"M18,7.078979492188409c-1.177612304689319-.682189941407159-2.541137695310681-1.078979492188409-4-1.078979492188409","key":"0"}),
      createElement(Path, {"d":"M22,14c0-1.458862304686591-.396789550779431-2.822387695311591-1.078979492189319-4","key":"1"})),
    createElement(Path, {"d":"M14,2c-2.615600585939319,0-5.028442382810681.84619140625-7,2.266723632813409","key":"4"}),
    createElement(Path, {"d":"M19,3.10919189453125c-1.522338867189319-.70458984375-3.211242675779431-1.10919189453125-5-1.10919189453125","key":"5"}),
    createElement(Line, {"x1":"22.010000000000218","y1":"5.083669433593968","x2":"22","y2":"5.07366943359375","key":"6"}),
    createElement(Path, {"d":"M14,14c0,2.95941162109375,1.611083984380457,5.53717041015625,4,6.921020507813409","key":"7"}),
    createElement(G, {"key":"8"},
      createElement(Path, {"d":"M2.170715332029431,12c-.110290527340112.650390625-.170715332029431,1.31781005859375-.170715332029431,2","key":"0"}),
      createElement(Path, {"d":"M4.266723632810681,7c-.449340820310681.62359619140625-.83349609375,1.295654296875-1.159301757810681,2","key":"1"})),
    createElement(Path, {"d":"M14,6c-4.078857421869543,0-7.437805175779431,3.05474853515625-7.930908203119543,7","key":"9"}),
    createElement(Path, {"d":"M6,16c0,1.740356445313409.4033203125,3.43780517578125,1.1240234375,5","key":"10"}),
    createElement(Path, {"d":"M2,14c0,1.709228515625.165954589849207,3.37890625.469665527349207,5","key":"11"})
  );
});

FingerprintDotted.displayName = 'FingerprintDotted';

module.exports = FingerprintDotted;
module.exports.FingerprintDotted = FingerprintDotted;
module.exports.default = FingerprintDotted;
