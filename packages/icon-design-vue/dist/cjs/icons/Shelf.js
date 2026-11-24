'use strict';

const { defineComponent, h } = require('vue');

const Shelf = defineComponent({
  name: 'Shelf',
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
          h('path', {"d":"M4 2L4 22"}),
          h('path', {"d":"M20 2L20 22"}),
          h('path', {"d":"M4 4L20 4"}),
          h('path', {"d":"M4 12L20 12"}),
          h('path', {"d":"M4 20L20 20"})
        ]
      );
  }
});

module.exports = Shelf;
module.exports.Shelf = Shelf;
module.exports.default = Shelf;
