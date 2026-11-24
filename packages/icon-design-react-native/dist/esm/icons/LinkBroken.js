import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const LinkBroken = forwardRef(function LinkBroken(
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
    createElement(Path, {"d":"M3.684997562779245,13.261657715323963c-1.040466308588293.916259765625-1.710266113279431,2.24298095703125-1.710266113279431,3.73834228515625,0,2.76141357421875,2.238586425779431,5,5,5h5c2.761413574220569,0,5-2.23858642578125,5-5s-2.238586425779431-5-5-5","key":"0"}),
    createElement(Path, {"d":"M20.264465336220383,15.738342285636463c1.040466308590112-.916259765625,1.710266113279431-2.24298095703125,1.710266113279431-3.73834228515625,0-2.76141357421875-2.238586425779431-5-5-5h-5c-.342529296869543,0-.676818847659888.03515625-1,.10076904296875","key":"1"}),
    createElement(Path, {"d":"M7.075500492470383,11.000000000480213c-.065612792970569.32318115234375-.100769042970569.657470703125-.100769042970569,1,0,2.76141357421875,2.238586425779431,5,5,5h1","key":"2"}),
    createElement(Line, {"x1":"1.974731449499814","y1":"9.000000000480213","x2":"3.974731449499814","y2":"9.000000000480213","key":"3"}),
    createElement(Line, {"x1":"8.974731449499814","y1":"2.000000000479304","x2":"8.974731449499814","y2":"4.000000000479304","key":"4"}),
    createElement(Line, {"x1":"3.732090762479856","y1":"3.757359313264715","x2":"5.146304324820449","y2":"5.171572875672609","key":"5"})
  );
});

LinkBroken.displayName = 'LinkBroken';

export default LinkBroken;
export { LinkBroken };
