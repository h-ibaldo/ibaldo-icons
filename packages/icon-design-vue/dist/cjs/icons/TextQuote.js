'use strict';

const { defineComponent, h } = require('vue');

const TextQuote = defineComponent({
  name: 'TextQuote',
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
          h('path', {"d":"M2 5L22.027 5"}),
          h('path', {"d":"M8 12L22.027 12"}),
          h('path', {"d":"M2 12L2 19"}),
          h('path', {"d":"M8 19L22.027 19"})
        ]
      );
  }
});

module.exports = TextQuote;
module.exports.TextQuote = TextQuote;
module.exports.default = TextQuote;
