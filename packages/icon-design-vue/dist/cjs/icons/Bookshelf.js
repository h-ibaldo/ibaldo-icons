'use strict';

const { defineComponent, h } = require('vue');

const Bookshelf = defineComponent({
  name: 'Bookshelf',
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
          h('path', {"d":"M2 17L22 17"}),
          h('path', {"d":"M5 20L5 17"}),
          h('path', {"d":"M19 20L19 17"}),
          h('path', {"d":"M4 17L4 7L8 7L8 17"}),
          h('path', {"d":"M8 17L8 4L12 4L12 17"}),
          h('path', {"d":"M16 17L16 5L20 5L20 17"})
        ]
      );
  }
});

module.exports = Bookshelf;
module.exports.Bookshelf = Bookshelf;
module.exports.default = Bookshelf;
