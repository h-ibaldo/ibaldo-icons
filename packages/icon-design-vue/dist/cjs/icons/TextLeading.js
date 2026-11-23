'use strict';

const { defineComponent, h } = require('vue');

const TextLeading = defineComponent({
  name: 'TextLeading',
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
          h('path', {"d":"M7 16L12 7L17 16"}),
          h('path', {"d":"M8.668 13L15.332 13"}),
          h('path', {"d":"M22 22L2 22"}),
          h('path', {"d":"M22 2L2 2"})
        ]
      );
  }
});

module.exports = TextLeading;
module.exports.TextLeading = TextLeading;
module.exports.default = TextLeading;
