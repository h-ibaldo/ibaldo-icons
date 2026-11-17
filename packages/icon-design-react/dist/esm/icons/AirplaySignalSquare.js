import { createElement, forwardRef } from 'react';

const AirplaySignalSquare = forwardRef(function AirplaySignalSquare(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M11.21913116245014,14.976082576405133l-1.919375152510838,2.399218940641731c-.52381067576971.654763344711682-.057637399018859,1.624695047554269.780868809441017,1.624695047554269h3.838750305019857c.838506208459876,0,1.304679485219822-.969931702842587.780868809450112-1.624695047554269l-1.919375152519933-2.399218940641731c-.400325282609629-.500406603259762-1.161412336270587-.500406603259762-1.561737618880215,0Z","key":"0"}),
    createElement('path', {"d":"M17.022094698450019,15.277645490382383c.616455078130457-.942626953125.977905273439319-2.0672607421875.977905273439319-3.27764892578125,0-3.313720703125-2.686279296869543-6-6-6-3.313720703119543,0-6,2.686279296875-6,6,0,1.21038818359375.361450195310681,2.33502197265625.977905273441138,3.27764892578125","key":"1"}),
    createElement('rect', {"x":"1.999999971889338","y":"1.999996564601133","width":"20","height":"20","rx":"2","ry":"2","key":"2"})
  );
});

AirplaySignalSquare.displayName = 'AirplaySignalSquare';

export default AirplaySignalSquare;
export { AirplaySignalSquare };
