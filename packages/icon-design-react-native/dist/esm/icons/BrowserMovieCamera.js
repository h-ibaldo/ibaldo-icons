import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path, Polygon } from 'react-native-svg';

const BrowserMovieCamera = forwardRef(function BrowserMovieCamera(
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
    createElement(Path, {"d":"M22.000000003630703,10.999999999998181l-.000000003630703-7c0-1.104569499661011-.895430500338989-2-2-2H4c-1.104569499670106,0-2,.895430500338989-2,2v16c0,1.104569499664649.895430500329894,2,2,2h2.000000003630703","key":"0"}),
    createElement(Line, {"x1":"5.035268549516331","y1":"4.998782739598028","x2":"5.025268549516113","y2":"4.998782739598028","key":"1"}),
    createElement(Line, {"x1":"8.035268549516331","y1":"4.998782739598028","x2":"8.025268549516113","y2":"4.998782739598028","key":"2"}),
    createElement(Line, {"x1":"19.000000003630703","y1":"4.999999999998181","x2":"11.000000003630703","y2":"4.999999999998181","key":"3"}),
    createElement(Line, {"x1":"2.000000003630703","y1":"7.999999999998181","x2":"22.000000003630703","y2":"7.999999999998181","key":"4"}),
    createElement(Polygon, {"points":"18.025268549516113 18.998782739598028 18.025268549516113 17.998782739598028 22.025268549516113 14.998782739598028 22.025268549516113 21.998782739598028 18.025268549516113 18.998782739598028","key":"5"}),
    createElement(Path, {"d":"M10.025268549516113,16.998782739598028h8v4c0,.551915024494001-.448084975505999,1-1,1h-6c-.551915024494001,0-1-.448084975505999-1-1v-4h0Z","key":"6"}),
    createElement(Circle, {"cx":"16.525268549516113","cy":"14.498782739598937","r":"2.499999999999545","key":"7"}),
    createElement(Circle, {"cx":"11.525268549516113","cy":"14.498782739598937","r":"2.499999999999545","key":"8"})
  );
});

BrowserMovieCamera.displayName = 'BrowserMovieCamera';

export default BrowserMovieCamera;
export { BrowserMovieCamera };
