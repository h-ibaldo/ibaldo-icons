'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path } = RNSvg;

const EyeLargeShine = forwardRef(function EyeLargeShine(
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
    createElement(Path, {"d":"M12.025268534785937,5.997562040162848c-4.272705078119543,0-8.178466796869543,2.44097900390625-10,6,1.821533203130457,3.559020996094659,5.727294921880457,6,10,6,4.272705078130457,0,8.178466796880457-2.440979003905341,10-6-1.821533203119543-3.55902099609375-5.727294921869543-6-10-6Z","key":"0"}),
    createElement(Circle, {"cx":"12.025268534785937","cy":"11.997562040162848","r":"5","key":"1"}),
    createElement(Path, {"d":"M12.025268534785937,9.997562040162848c-1.104569499599165,0-2,.895430500400835-2,2s.895430500400835,2,2,2,2-.895430500400835,2-2","key":"2"})
  );
});

EyeLargeShine.displayName = 'EyeLargeShine';

module.exports = EyeLargeShine;
module.exports.EyeLargeShine = EyeLargeShine;
module.exports.default = EyeLargeShine;
