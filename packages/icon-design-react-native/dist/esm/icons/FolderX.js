import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const FolderX = forwardRef(function FolderX(
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
    createElement(Path, {"d":"M12.999999978690539,20.999999999998181H3.99999995789949c-1.104569499659192,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500340808-2,2-2h3.929630589660519c.668705935499929,0,1.293168239900297.334201833509724,1.664099899289795.890598573469106l.812536329350223,1.218802853061788c.370931659389498.556396739959382.995393963789866.890598573469106,1.664099899289795.890598573469106h7.929633174780065c1.104569483930391,0,1.999999977750122.895430475789908,2,1.999999959721208l.000000100710167,5.000000040278792","key":"0"}),
    createElement(Line, {"x1":"16.999999978690539","y1":"16.999999999998181","x2":"21.999999978690539","y2":"21.999999999998181","key":"1"}),
    createElement(Line, {"x1":"21.999999978690539","y1":"16.999999999998181","x2":"16.999999978690539","y2":"21.999999999998181","key":"2"})
  );
});

FolderX.displayName = 'FolderX';

export default FolderX;
export { FolderX };
