import { createElement, forwardRef } from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

const MusicNote = forwardRef(function MusicNote(
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
    createElement(Ellipse, {"cx":"9","cy":"18.499999999998181","rx":"4","ry":"3.5","key":"0"}),
    createElement(Path, {"d":"M19,18.999999999998181l.507355885960351-1.775745600880327c.883884771999874-3.09359670197955-.386450127989519-6.398688300390859-3.114790657620688-8.103901131409657l-.000050577180446-.00003161073073c-2.1104379185781-1.319023699119498-3.392514651159217-3.632207620099507-3.392514651159217-6.120936558138055v-.999385098841231,16","key":"1"})
  );
});

MusicNote.displayName = 'MusicNote';

export default MusicNote;
export { MusicNote };
