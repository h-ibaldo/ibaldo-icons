'use strict';

const { defineComponent, h } = require('vue');

const JustifyLeft = defineComponent({
  name: 'JustifyLeft',
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
          h('path', {"d":"M2 2L2 22"}),
          h('path', {"d":"M17 8L21 8C21.551 8 22 8.449 22 9L22 15C22 15.551 21.551 16 21 16L17 16C16.449 16 16 15.551 16 15L16 9C16 8.449 16.449 8 17 8Z"}),
          h('path', {"d":"M7 6L11 6C11.551 6 12 6.449 12 7L12 17C12 17.551 11.551 18 11 18L7 18C6.449 18 6 17.551 6 17L6 7C6 6.449 6.449 6 7 6Z"})
        ]
      );
  }
});

module.exports = JustifyLeft;
module.exports.JustifyLeft = JustifyLeft;
module.exports.default = JustifyLeft;
