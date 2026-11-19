import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const CloudHappyRound = forwardRef(function CloudHappyRound(
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
    createElement(Path, {"d":"M17.924255383690252,9.093139648438409c-.438171386720569-2.882202148440228-2.919616699220569-5.093139648440228-5.924255371090112-5.093139648440228-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648440228-2.318725585930224.434509277339203-4.075744628900793,2.462036132809772-4.075744628900793,4.906860351559772,0,2.761413574209655,2.238525390619543,5,5,5h10c2.761474609369543,0,5-2.238586425790345,5-5,0-2.44482421875-1.757019042970569-4.472351074220569-4.075744628909888-4.906860351559772Z","key":"0"}),
    createElement(Line, {"x1":"10","y1":"10.999999973497324","x2":"10","y2":"9.999999973497324","key":"1"}),
    createElement(Line, {"x1":"14","y1":"10.999999973497324","x2":"14","y2":"9.999999973497324","key":"2"}),
    createElement(Path, {"d":"M9,14.190734836778574c.883239746090112.511657714829198,1.905822753900793.80926513671875,3,.80926513671875,1.094177246090112,0,2.116760253900793-.297607421889552,3-.80926513671875","key":"3"})
  );
});

CloudHappyRound.displayName = 'CloudHappyRound';

export default CloudHappyRound;
export { CloudHappyRound };
