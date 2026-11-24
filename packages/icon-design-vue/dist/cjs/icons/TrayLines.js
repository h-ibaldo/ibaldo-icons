'use strict';

const { defineComponent, h } = require('vue');

const TrayLines = defineComponent({
  name: 'TrayLines',
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
          h('path', {"d":"M3 13L3 19C3 20.105 3.895 21 5 21L19 21C20.105 21 21 20.105 21 19L21 13"}),
          h('path', {"d":"M7 16L17 16"}),
          h('path', {"d":"M7 12L17 12"}),
          h('path', {"d":"M7 8L17 8"}),
          h('path', {"d":"M7 4L17 4"})
        ]
      );
  }
});

module.exports = TrayLines;
module.exports.TrayLines = TrayLines;
module.exports.default = TrayLines;
