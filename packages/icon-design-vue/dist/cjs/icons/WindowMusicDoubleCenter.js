'use strict';

const { defineComponent, h } = require('vue');

const WindowMusicDoubleCenter = defineComponent({
  name: 'WindowMusicDoubleCenter',
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
          h('rect', {"x":"2.000000000184627","y":"2.000000000448381","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381"}),
          h('ellipse', {"cx":"8.500000000184627","cy":"18.000000000448381","rx":"1.5","ry":"1"}),
          h('polyline', {"points":"17.000000000184627 17.000000000448381 17.000000000184627 11.000000000448381 10.000000000184627 12.000000000448381 10.000000000184627 18.000000000448381"}),
          h('ellipse', {"cx":"15.500000000184627","cy":"17.000000000448381","rx":"1.5","ry":"1"}),
          h('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381"})
        ]
      );
  }
});

module.exports = WindowMusicDoubleCenter;
module.exports.WindowMusicDoubleCenter = WindowMusicDoubleCenter;
module.exports.default = WindowMusicDoubleCenter;
