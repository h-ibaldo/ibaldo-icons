'use strict';

const { defineComponent, h } = require('vue');

const SeparatorHorizontal = defineComponent({
  name: 'SeparatorHorizontal',
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
          h('path', {"d":"M7 17L12.316 22L17.637 17"}),
          h('path', {"d":"M17.637 6.859L12.316 2L7 6.859"})
        ]
      );
  }
});

module.exports = SeparatorHorizontal;
module.exports.SeparatorHorizontal = SeparatorHorizontal;
module.exports.default = SeparatorHorizontal;
