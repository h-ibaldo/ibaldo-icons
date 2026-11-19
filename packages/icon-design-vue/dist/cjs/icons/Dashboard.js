'use strict';

const { defineComponent, h } = require('vue');

const Dashboard = defineComponent({
  name: 'Dashboard',
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
          h('rect', {"x":"1.999999990790457","y":"2.000000000448381","width":"8","height":"6","rx":"1","ry":"1"}),
          h('rect', {"x":"13.999999990790457","y":"16.000000000448381","width":"8","height":"6","rx":"1","ry":"1"}),
          h('rect', {"x":"13.999999990790457","y":"2.000000000448381","width":"8","height":"10","rx":"1","ry":"1"}),
          h('rect', {"x":"1.999999990790457","y":"12.000000000448381","width":"8","height":"10","rx":"1","ry":"1"})
        ]
      );
  }
});

module.exports = Dashboard;
module.exports.Dashboard = Dashboard;
module.exports.default = Dashboard;
