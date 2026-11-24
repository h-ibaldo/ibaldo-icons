'use strict';

const { defineComponent, h } = require('vue');

const TextH = defineComponent({
  name: 'TextH',
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
          h('path', {"d":"M5 2.023L5 22"}),
          h('path', {"d":"M19 12.012L5 12.012"}),
          h('path', {"d":"M19 2.023L19 22"})
        ]
      );
  }
});

module.exports = TextH;
module.exports.TextH = TextH;
module.exports.default = TextH;
