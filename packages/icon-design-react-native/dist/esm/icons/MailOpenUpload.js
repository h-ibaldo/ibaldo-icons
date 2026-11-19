import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const MailOpenUpload = forwardRef(function MailOpenUpload(
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
    createElement(Path, {"d":"M22.000000000224645,9.032754075946286v12c0,.552284749828686-.447715250169495,1-1,1H3.000000000224645c-.552284749829596,0-1-.447715250171314-1-1v-12","key":"0"}),
    createElement(Path, {"d":"M2.000000000224645,9.032754075946286l9.426537655635002,6.598576358948776c.344320151393731.2410241059697.802604537336265.2410241059697,1.146924688728177,0l9.426537655636821-6.598576358948776","key":"1"}),
    createElement(Path, {"d":"M21.999999999821739,9.032754076844867L12.573462344940708,2.434177717044804c-.344320151370084-.241024106009718-.802604537298066-.241024106038822-1.146924688714535-.000000000098225L1.999999999821739,9.032754075044068","key":"2"}),
    createElement(Polyline, {"points":"15.000000000224645 10.032754075946286 12.00000000063028 7.032754075946286 9.000000000224645 10.032754075946286","key":"3"}),
    createElement(Line, {"x1":"12.000000000224645","y1":"15.032754075946286","x2":"12.000000000224645","y2":"7.032754076844867","key":"4"})
  );
});

MailOpenUpload.displayName = 'MailOpenUpload';

export default MailOpenUpload;
export { MailOpenUpload };
