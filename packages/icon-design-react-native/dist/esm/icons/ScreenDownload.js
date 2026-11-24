import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const ScreenDownload = forwardRef(function ScreenDownload(
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
    createElement(Path, {"d":"M16.974731450033687,5.000000000459295h3c1.104569499661011,0,2,.895430500336261,2,2v12.999999999999091c0,1.10456949966192-.895430500338989,2-2,2H3.974731450033687c-1.104569499661011,0-2-.89543050033808-2-2V7.000000000459295c0-1.104569499663739.895430500338989-2.000000000002728,2-2l3,.000000000002728","key":"0"}),
    createElement(Polyline, {"points":"14.974731450033687 9.000000000459295 11.974731449360661 12.000000000459295 8.974731450033687 9.000000000459295","key":"1"}),
    createElement(Line, {"x1":"11.974731450033687","y1":"2.000000000459295","x2":"11.974731449360661","y2":"12.000000000459295","key":"2"}),
    createElement(Line, {"x1":"5.974731450033687","y1":"17.000000000459295","x2":"5.974731450033687","y2":"22.000000000459295","key":"3"}),
    createElement(Line, {"x1":"9.974731450033687","y1":"17.000000000459295","x2":"9.974731450033687","y2":"22.000000000459295","key":"4"}),
    createElement(Line, {"x1":"13.974731450033687","y1":"17.000000000459295","x2":"13.974731450033687","y2":"22.000000000459295","key":"5"}),
    createElement(Line, {"x1":"17.974731450033687","y1":"17.000000000459295","x2":"17.974731450033687","y2":"22.000000000459295","key":"6"}),
    createElement(Line, {"x1":"5.974731450033687","y1":"17.000000000459295","x2":"17.974731450033687","y2":"17.000000000459295","key":"7"})
  );
});

ScreenDownload.displayName = 'ScreenDownload';

export default ScreenDownload;
export { ScreenDownload };
