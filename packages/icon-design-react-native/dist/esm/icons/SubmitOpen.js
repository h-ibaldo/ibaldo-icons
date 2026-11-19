import { createElement, forwardRef } from 'react';
import Svg, { Path, Polyline } from 'react-native-svg';

const SubmitOpen = forwardRef(function SubmitOpen(
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
    createElement(Path, {"d":"M10.974731440099276,17.000000003885361h3v2.684900338826992c0,.45975855089273.568257703540439.675809744698199.873704659350551.332181919413415l7.126295340649449-8.017082258236769L14.848436099449827,3.982917745644954c-.305446955810112-.343627825281146-.873704659350551-.127576631475677-.873704659350551.332181919417053v2.684900338823354H2.974731440099276c-.552284749819592,0-1,.447715250171314-1,1v2","key":"0"}),
    createElement(Polyline, {"points":"1.974731440099276 15.000000003885361 3.974731440099276 17.000000003885361 7.974731440099276 13.000000003885361","key":"1"})
  );
});

SubmitOpen.displayName = 'SubmitOpen';

export default SubmitOpen;
export { SubmitOpen };
