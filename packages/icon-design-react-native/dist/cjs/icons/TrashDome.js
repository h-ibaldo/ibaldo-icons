'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const TrashDome = forwardRef(function TrashDome(
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
    createElement(Path, {"d":"M5.999999989689968,10.000000001075932l.00000000062937,10.000000001618901c.000000000050932,1.104569499661011.895430500420844,1.999999999959982,2.000000000090949,1.99999999990996l8.00000000080945-.000000000448381c1.104569499659192-.000000000051841,1.999999999959982-.895430500430848,1.99999999991087-2.000000000091859l-.000000000631189-10.000000001616172","key":"0"}),
    createElement(Path, {"d":"M19.999999989780918,10.0000000004502l.00000000062937-2.000000000090949c.000000000049113-1.104569499661011-.895430500240764-2.000000000040018-1.99999999991087-2.00000000008913l-12.00000000008913-.00000000044929c-1.104569499661011-.000000000049113-2.000000000040018.895430500249859-2.000000000090949,1.99999999991087l-.00000000062937,2.00000000008913,16.000000000090949.00000000062937Z","key":"1"}),
    createElement(Line, {"x1":"9.999999990410288","y1":"2.000000000448381","x2":"13.999999990410288","y2":"2.000000000448381","key":"2"}),
    createElement(Line, {"x1":"9.999999990410288","y1":"14.000000000446562","x2":"9.999999990410288","y2":"18.000000000448381","key":"3"}),
    createElement(Line, {"x1":"13.999999990410288","y1":"14.000000000446562","x2":"13.999999990410288","y2":"18.000000000448381","key":"4"})
  );
});

TrashDome.displayName = 'TrashDome';

module.exports = TrashDome;
module.exports.TrashDome = TrashDome;
module.exports.default = TrashDome;
