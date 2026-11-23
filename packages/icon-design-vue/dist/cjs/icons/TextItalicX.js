'use strict';

const { defineComponent, h } = require('vue');

const TextItalicX = defineComponent({
  name: 'TextItalicX',
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
          h('path', {"d":"M3 7L5 3L21 3L19 7"}),
          h('path', {"d":"M6 20L13 3"}),
          h('path', {"d":"M3 20L10 20"}),
          h('path', {"d":"M16 22L22 16"}),
          h('path', {"d":"M22 22L16 16"})
        ]
      );
  }
});

module.exports = TextItalicX;
module.exports.TextItalicX = TextItalicX;
module.exports.default = TextItalicX;
