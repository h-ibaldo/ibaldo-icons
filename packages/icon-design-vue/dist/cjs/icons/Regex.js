'use strict';

const { defineComponent, h } = require('vue');

const Regex = defineComponent({
  name: 'Regex',
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
          h('path', {"d":"M5 16L6 16C7.105 16 8 16.895 8 18L8 19C8 20.105 7.105 21 6 21L5 21C3.895 21 3 20.105 3 19L3 18C3 16.895 3.895 16 5 16Z"}),
          h('path', {"d":"M13 7.902L22 7.902"}),
          h('path', {"d":"M15.25 12L19.75 3.805"}),
          h('path', {"d":"M19.75 12L15.25 3.805"})
        ]
      );
  }
});

module.exports = Regex;
module.exports.Regex = Regex;
module.exports.default = Regex;
