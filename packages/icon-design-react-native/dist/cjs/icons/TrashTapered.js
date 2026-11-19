'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const TrashTapered = forwardRef(function TrashTapered(
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
    createElement(Rect, {"x":"3.0252685457599","y":"6.000000001481567","width":"18","height":"3","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M19.0252685457599,9.000000001481567l-.857953307520802,11.153392997768606c-.080153410768617,1.041994339989287-.949036354479176,1.846607002231394-1.994108971008245,1.846607002231394H7.877330824279852c-1.045072616530888,0-1.913955560230534-.804612662242107-1.99410897099915-1.846607002231394l-.857953307520802-11.153392997768606","key":"1"}),
    createElement(Line, {"x1":"10.0252685457599","y1":"13.000000001481567","x2":"10.0252685457599","y2":"18.000000001481567","key":"2"}),
    createElement(Line, {"x1":"14.0252685457599","y1":"13.000000001481567","x2":"14.0252685457599","y2":"18.000000001481567","key":"3"}),
    createElement(Path, {"d":"M15.0252685457599,6.000000001481567v-2.353921007723329c0-.909104324451619-.736974667830509-1.64607899227849-1.646078992280309-1.64607899227849h-2.707842015448477c-.909104324451619,0-1.646078992271214.736974667826871-1.646078992271214,1.64607899227849v2.353921007723329","key":"4"})
  );
});

TrashTapered.displayName = 'TrashTapered';

module.exports = TrashTapered;
module.exports.TrashTapered = TrashTapered;
module.exports.default = TrashTapered;
