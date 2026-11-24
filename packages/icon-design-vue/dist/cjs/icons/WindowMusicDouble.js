'use strict';

const { defineComponent, h } = require('vue');

const WindowMusicDouble = defineComponent({
  name: 'WindowMusicDouble',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('polyline', {"points":"22.000000000182808 13.0000000004502 15.000000000184627 14.000000000448381 15.000000000184627 21.000000000448381"}),
          h('ellipse', {"cx":"13.500000000184627","cy":"21.000000000448381","rx":"1.5","ry":"1"}),
          h('line', {"x1":"22.000000000184627","y1":"13.000000000448381","x2":"22.000000000184627","y2":"20.000000000448381"}),
          h('ellipse', {"cx":"20.500000000184627","cy":"20.000000000448381","rx":"1.5","ry":"1"}),
          h('path', {"d":"M8.000000000184627,22.000000000448381h-4c-1.104569499661011,0-2-.89543050033717-2-2V4.000000000448381c0-1.10456949966192.895430500338989-2,2-2h16c1.104569499661011,0,2,.89543050033808,2,2v5"}),
          h('line', {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381"}),
          h('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381"})
        ]
      );
  }
});

module.exports = WindowMusicDouble;
module.exports.WindowMusicDouble = WindowMusicDouble;
module.exports.default = WindowMusicDouble;
