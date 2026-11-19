'use strict';

const { defineComponent, h } = require('vue');

const Brackets = defineComponent({
  name: 'Brackets',
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
          h('path', {"d":"M8 8L4 12L8 16"}),
          h('path', {"d":"M16 8L20 12L16 16"})
        ]
      );
  }
});

module.exports = Brackets;
module.exports.Brackets = Brackets;
module.exports.default = Brackets;
