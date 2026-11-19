'use strict';

const { defineComponent, h } = require('vue');

const DashboardChart = defineComponent({
  name: 'DashboardChart',
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
          h('rect', {"x":"15.999999990790457","y":"2.000000000448381","width":"6","height":"8","rx":"1","ry":"1"}),
          h('rect', {"x":"1.999999990790457","y":"16.000000000448381","width":"10","height":"6","rx":"1","ry":"1"}),
          h('circle', {"cx":"6.999999990790457","cy":"7.000000000449745","r":"4.999999999999773"}),
          h('line', {"x1":"15.999999990790457","y1":"22.0000000004502","x2":"21.999999990790457","y2":"22.0000000004502"}),
          h('line', {"x1":"15.999999990790457","y1":"18.000000000448381","x2":"21.999999990790457","y2":"18.000000000448381"}),
          h('line', {"x1":"15.999999990790457","y1":"14.000000000448381","x2":"21.999999990790457","y2":"14.000000000448381"}),
          h('polyline', {"points":"6.999999990790457 2.000000000448381 6.999999990790457 7.0000000004502 11.999999990790457 7.0000000004502"})
        ]
      );
  }
});

module.exports = DashboardChart;
module.exports.DashboardChart = DashboardChart;
module.exports.default = DashboardChart;
