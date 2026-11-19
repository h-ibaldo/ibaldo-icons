import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

const MailboxFlagBare = forwardRef(function MailboxFlagBare(
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
    createElement(Polyline, {"points":"17.945392090279711 10.999999999998181 17.945392090459791 2.999999999998181 21.945392090279711 3.000000000087311 21.945392090229689 6.999999999998181 17.945392090409769 6.999999999909051","key":"0"}),
    createElement(Path, {"d":"M7.445386575475603,5.000000001879897h.000011013581317c3.035529578712417,0,5.499994462907427,2.46446488419501,5.499994462907427,5.499994462907427v10.500005535210885H2.945392094781115c-.551915024139694,0-.999999999358042-.44808497521835-.999999999358042-.999999999358042v-9.500005518707741c0-3.035529588175057,2.464464891877473-5.499994480052528,5.499994480052529-5.499994480052528Z","key":"1"}),
    createElement(Line, {"x1":"7.445392090279711","y1":"4.999999999998181","x2":"14.945392090279711","y2":"4.999999999998181","key":"2"}),
    createElement(Path, {"d":"M12.945392090279711,20.999999999998181h8c.552284749830505,0,1-.447715250169495,1-1v-10","key":"3"})
  );
});

MailboxFlagBare.displayName = 'MailboxFlagBare';

export default MailboxFlagBare;
export { MailboxFlagBare };
