'use strict';

const { defineComponent, h } = require('vue');

const Paintbrush = defineComponent({
  name: 'Paintbrush',
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
          h('path', {"d":"M8 9L2 15L9 22L15 16"}),
          h('path', {"d":"M19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8L16 11L19 14L16 17L7 8L10 5L13 8L16 5C16 3.344 17.344 2 19 2Z"}),
          h('path', {"d":"M4 13L12 19"})
        ]
      );
  }
});

module.exports = Paintbrush;
module.exports.Paintbrush = Paintbrush;
module.exports.default = Paintbrush;
