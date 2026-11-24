'use strict';

const { defineComponent, h } = require('vue');

const StretchVertical = defineComponent({
  name: 'StretchVertical',
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
          h('path', {"d":"M22 4L22 20C22 21.105 21.105 22 20 22L17 22C15.895 22 15 21.105 15 20L15 4C15 2.895 15.895 2 17 2L20 2C21.105 2 22 2.895 22 4Z"}),
          h('path', {"d":"M9 4L9 20C9 21.105 8.105 22 7 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L7 2C8.105 2 9 2.895 9 4Z"})
        ]
      );
  }
});

module.exports = StretchVertical;
module.exports.StretchVertical = StretchVertical;
module.exports.default = StretchVertical;
