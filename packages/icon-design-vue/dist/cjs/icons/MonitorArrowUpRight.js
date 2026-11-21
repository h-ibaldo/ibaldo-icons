'use strict';

const { defineComponent, h } = require('vue');

const MonitorArrowUpRight = defineComponent({
  name: 'MonitorArrowUpRight',
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
          h('path', {"d":"M22 13L22 18L2 18L2 4L13 4"}),
          h('path', {"d":"M12 21L12 18"}),
          h('path', {"d":"M18 21L6 21"}),
          h('path', {"d":"M22 9L22 4L17 4"}),
          h('path', {"d":"M17 9L22 4"})
        ]
      );
  }
});

module.exports = MonitorArrowUpRight;
module.exports.MonitorArrowUpRight = MonitorArrowUpRight;
module.exports.default = MonitorArrowUpRight;
