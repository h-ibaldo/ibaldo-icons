import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const BrowserDollarSearch = forwardRef(function BrowserDollarSearch(
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
    createElement(Path, {"d":"M7.9999999764932,21.998779299956368H3.999999976453182c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v5","key":"0"}),
    createElement(Line, {"x1":"1.999999976453182","y1":"5.998779299956368","x2":"21.999999976453182","y2":"5.998779299956368","key":"1"}),
    createElement(Circle, {"cx":"17.9999999764932","cy":"15.998779299956368","r":"4","key":"2"}),
    createElement(Line, {"x1":"15.17156980071195","y1":"18.827209475737618","x2":"11.9999999764932","y2":"21.998779299956368","key":"3"}),
    createElement(Path, {"d":"M9.9999999764932,10.998779299956368h-2.500001500000508c-.828426296320686,0-1.499998499999492.671572203678807-1.499998499999492,1.499998499999492v.000003000001016c0,.828426296317048.671572203678807,1.499998499999492,1.499998499999492,1.499998499999492h1.000003000001016c.828426296318867,0,1.499998499999492.671572203678807,1.499998499999492,1.499998499999492v.000003000001016c0,.828426296317048-.671572203680626,1.499998499999492-1.499998499999492,1.499998499999492h-2.500001500000508","key":"4"}),
    createElement(Line, {"x1":"7.9999999764932","y1":"17.998779299956368","x2":"7.9999999764932","y2":"16.998779299956368","key":"5"}),
    createElement(Line, {"x1":"7.9999999764932","y1":"10.998779299956368","x2":"7.9999999764932","y2":"9.998779299956368","key":"6"})
  );
});

BrowserDollarSearch.displayName = 'BrowserDollarSearch';

export default BrowserDollarSearch;
export { BrowserDollarSearch };
