'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path } = RNSvg;

const AirplaySignalCircle = forwardRef(function AirplaySignalCircle(
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
    createElement(Path, {"d":"M11.21913116245014,14.976082576405133l-1.919375152510838,2.399218940641731c-.52381067576971.654763344711682-.057637399018859,1.624695047554269.780868809441017,1.624695047554269h3.838750305028952c.838506208450781,0,1.304679485210727-.969931702842587.780868809441017-1.624695047554269l-1.919375152519933-2.399218940641731c-.400325282600534-.500406603259762-1.161412336270587-.500406603259762-1.561737618880215,0Z","key":"0"}),
    createElement(Circle, {"cx":"11.999999971889338","cy":"11.999996564601133","r":"10","key":"1"}),
    createElement(Path, {"d":"M9.999999971889338,11.999996564601133c0-1.104569499599165.895430500400835-2,2-2,1.104569499600984,0,2,.895430500400835,2,2","key":"2"}),
    createElement(Path, {"d":"M17.022094698450019,15.277645490382383c.616455078130457-.942626953125.977905273439319-2.0672607421875.977905273439319-3.27764892578125,0-3.313720703125-2.686279296869543-6-6-6-3.313720703119543,0-6,2.686279296875-6,6,0,1.21038818359375.361450195310681,2.33502197265625.977905273441138,3.27764892578125","key":"3"})
  );
});

AirplaySignalCircle.displayName = 'AirplaySignalCircle';

module.exports = AirplaySignalCircle;
module.exports.AirplaySignalCircle = AirplaySignalCircle;
module.exports.default = AirplaySignalCircle;
