'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, G, Line, Path } = RNSvg;

const SearchPinB = forwardRef(function SearchPinB(
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
    createElement(Circle, {"cx":"9.999999976489562","cy":"9.998779299956368","r":"8","key":"0"}),
    createElement(Line, {"x1":"15.656860328050243","y1":"15.655639651518868","x2":"21.999999976489562","y2":"21.998779299956368","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Line, {"x1":"9.999999976489562","y1":"9.008779299956586","x2":"9.999999976489562","y2":"8.998779299956368","key":"0"}),
      createElement(Path, {"d":"M12.999999976489562,8.998779299956368c0-1.656854249398748-1.343145750599433-3-3-3s-3,1.343145750601252-3,3","key":"1"}),
      createElement(Path, {"d":"M6.999999976489562,8.998779299956368v.000002000000677c0,1.280577209327021.508707317090739,2.508705317090062,1.414212148160004,3.414210148159327l1.585787851839996,1.585787851839996,1.585787851839996-1.585787851839996c.905504831071084-.905504831069265,1.414212148160004-2.133632909029984,1.414212148160004-3.414210148159327v-.000002000000677","key":"2"}))
  );
});

SearchPinB.displayName = 'SearchPinB';

module.exports = SearchPinB;
module.exports.SearchPinB = SearchPinB;
module.exports.default = SearchPinB;
