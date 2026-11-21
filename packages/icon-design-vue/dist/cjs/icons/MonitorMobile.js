'use strict';

const { defineComponent, h } = require('vue');

const MonitorMobile = defineComponent({
  name: 'MonitorMobile',
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
          h('path', {"d":"M14 16L2 16L2 3L22 3L22 9"}),
          h('path', {"d":"M12 20L12 16"}),
          h('path', {"d":"M14 20L6 20"}),
          h('path', {"d":"M18 12L21 12C21.551 12 22 12.449 22 13L22 20C22 20.551 21.551 21 21 21L18 21C17.449 21 17 20.551 17 20L17 13C17 12.449 17.449 12 18 12Z"})
        ]
      );
  }
});

module.exports = MonitorMobile;
module.exports.MonitorMobile = MonitorMobile;
module.exports.default = MonitorMobile;
