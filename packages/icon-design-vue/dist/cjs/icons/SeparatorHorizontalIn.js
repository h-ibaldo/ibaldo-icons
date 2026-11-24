'use strict';

const { defineComponent, h } = require('vue');

const SeparatorHorizontalIn = defineComponent({
  name: 'SeparatorHorizontalIn',
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
          h('path', {"d":"M2 12L22 12"}),
          h('path', {"d":"M17.637 22L12.316 17L7 22"}),
          h('path', {"d":"M7 2L12.316 6.859L17.637 2"})
        ]
      );
  }
});

module.exports = SeparatorHorizontalIn;
module.exports.SeparatorHorizontalIn = SeparatorHorizontalIn;
module.exports.default = SeparatorHorizontalIn;
