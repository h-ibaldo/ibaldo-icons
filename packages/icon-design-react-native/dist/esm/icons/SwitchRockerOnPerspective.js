import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polygon } from 'react-native-svg';

const SwitchRockerOnPerspective = forwardRef(function SwitchRockerOnPerspective(
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
    createElement(Line, {"x1":"19.999999977100742","y1":"21.999996563434252","x2":"19.999999977100742","y2":"1.999996563434252","key":"0"}),
    createElement(Polygon, {"points":"12.999999977100742 10.999996563434252 9.999999977100742 10.999996563434252 8.999999977100742 13.999996563434252 11.999999977100742 13.999996563434252 12.999999977100742 10.999996563434252","key":"1"}),
    createElement(Path, {"d":"M19.999999977089828,21.999996563434252h-11l-3.399158314909073-2.719326651927986c-.965297481840025-.772237985474931-1.358077547800349-2.057518587396771-.989354791439837-3.237431407738768L8.999999977089828,1.999996563434252h11","key":"2"}),
    createElement(Path, {"d":"M19.999999977089828,21.999996563434252l-3.399158314909073-2.719326651927986c-.965297481840025-.772237985474931-1.358077547800349-2.057518587396771-.989354791439837-3.237431407738768L19.999999977089828,1.999996563434252","key":"3"}),
    createElement(Line, {"x1":"4.999999977089828","y1":"17.999996563434252","x2":"14.999999977089828","y2":"17.999996563434252","key":"4"}),
    createElement(Line, {"x1":"13.599975563029147","y1":"4.999996563434252","x2":"12.400024391159604","y2":"7.999996563434252","key":"5"})
  );
});

SwitchRockerOnPerspective.displayName = 'SwitchRockerOnPerspective';

export default SwitchRockerOnPerspective;
export { SwitchRockerOnPerspective };
