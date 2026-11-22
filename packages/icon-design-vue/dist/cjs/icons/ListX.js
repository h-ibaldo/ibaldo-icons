'use strict';

const { defineComponent, h } = require('vue');

const ListX = defineComponent({
  name: 'ListX',
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
          h('path', {"d":"M2 4L22 4"}),
          h('path', {"d":"M2 12L12 12"}),
          h('path', {"d":"M17 10L21 14"}),
          h('path', {"d":"M17 10L21 14"}),
          h('path', {"d":"M21 10L17 14"}),
          h('path', {"d":"M2 20L22 20"})
        ]
      );
  }
});

module.exports = ListX;
module.exports.ListX = ListX;
module.exports.default = ListX;
