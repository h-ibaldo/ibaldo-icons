'use strict';

const { defineComponent, h } = require('vue');

const MonitorOff = defineComponent({
  name: 'MonitorOff',
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
          h('path', {"d":"M21 3.75L21 17L3.332 17"}),
          h('path', {"d":"M3 13L3 4L15 4"}),
          h('path', {"d":"M12 21L12 17"}),
          h('path', {"d":"M18 21L6 21"}),
          h('path', {"d":"M2 18L22 3"})
        ]
      );
  }
});

module.exports = MonitorOff;
module.exports.MonitorOff = MonitorOff;
module.exports.default = MonitorOff;
