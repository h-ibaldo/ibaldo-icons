import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const Lifebuoy = forwardRef(function Lifebuoy(
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
    createElement(Line, {"x1":"13.967244584106083","y1":"21.831826341574924","x2":"13.967244584106083","y2":"16.610634935324924","key":"0"}),
    createElement(Line, {"x1":"9.967244584106083","y1":"16.610634935324924","x2":"9.967244584106083","y2":"21.831826341574924","key":"1"}),
    createElement(Line, {"x1":"9.967244584106083","y1":"2.233681810324924","x2":"9.967244584106083","y2":"7.454873216574924","key":"2"}),
    createElement(Line, {"x1":"13.967244584106083","y1":"7.454873216574924","x2":"13.967244584106083","y2":"2.233681810324924","key":"3"}),
    createElement(Line, {"x1":"16.545125443481083","y1":"14.032754075946286","x2":"21.766377884888243","y2":"14.032754075946286","key":"4"}),
    createElement(Line, {"x1":"21.766377884888243","y1":"10.032754075946286","x2":"16.545125443481083","y2":"10.032754075946286","key":"5"}),
    createElement(Line, {"x1":"2.168111283324833","y1":"14.032754075946286","x2":"7.389363724731083","y2":"14.032754075946286","key":"6"}),
    createElement(Line, {"x1":"7.389363724731083","y1":"10.032754075946286","x2":"2.168111283324833","y2":"10.032754075946286","key":"7"}),
    createElement(Circle, {"cx":"11.967244584106083","cy":"12.032754075946286","r":"5","key":"8"}),
    createElement(Circle, {"cx":"11.967244584106083","cy":"12.032754075946286","r":"10","key":"9"})
  );
});

Lifebuoy.displayName = 'Lifebuoy';

export default Lifebuoy;
export { Lifebuoy };
