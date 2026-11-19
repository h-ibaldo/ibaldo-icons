import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

const DiagramMindMap = forwardRef(function DiagramMindMap(
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
    createElement(Circle, {"cx":"3.949462885142566","cy":"4.000000000480213","r":"2","key":"0"}),
    createElement(Line, {"x1":"8.828124994517566","y1":"8.878662109858851","x2":"5.363647455455066","y2":"5.414184570789075","key":"1"}),
    createElement(Circle, {"cx":"17.949462885142566","cy":"4.000000000480213","r":"2","key":"2"}),
    createElement(Line, {"x1":"16.535278314830066","y1":"5.414184570789075","x2":"13.070800775767566","y2":"8.878662109858851","key":"3"}),
    createElement(Circle, {"cx":"3.949462885142566","cy":"18.000000000480213","r":"2","key":"4"}),
    createElement(Line, {"x1":"5.363647455455066","y1":"16.585815430167713","x2":"8.828124994517566","y2":"13.121337891108851","key":"5"}),
    createElement(Circle, {"cx":"19.949462885142566","cy":"14.000000000480213","r":"2","key":"6"}),
    createElement(Circle, {"cx":"10.949462885142566","cy":"11.000000000480213","r":"3","key":"7"}),
    createElement(Line, {"x1":"18.060424799205066","y1":"13.370361328608851","x2":"13.782958978892566","y2":"11.944580078608851","key":"8"}),
    createElement(Circle, {"cx":"13.949462885142566","cy":"20.000000000480213","r":"2","key":"9"}),
    createElement(Line, {"x1":"13.319824213522224","y1":"18.11096191445904","x2":"11.894042964098844","y2":"13.833496093950089","key":"10"})
  );
});

DiagramMindMap.displayName = 'DiagramMindMap';

export default DiagramMindMap;
export { DiagramMindMap };
