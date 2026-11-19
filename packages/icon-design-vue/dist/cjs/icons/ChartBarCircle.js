'use strict';

const { defineComponent, h } = require('vue');

const ChartBarCircle = defineComponent({
  name: 'ChartBarCircle',
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
          h('circle', {"cx":"11.974731440099276","cy":"12.000000003885361","r":"10"}),
          h('rect', {"x":"5.974731440099276","y":"11.000000003885361","width":"4","height":"4"}),
          h('rect', {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"8"}),
          h('rect', {"x":"13.974731440099276","y":"9.000000003885361","width":"4","height":"6"})
        ]
      );
  }
});

module.exports = ChartBarCircle;
module.exports.ChartBarCircle = ChartBarCircle;
module.exports.default = ChartBarCircle;
