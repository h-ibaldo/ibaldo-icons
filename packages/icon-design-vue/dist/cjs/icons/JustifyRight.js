'use strict';

const { defineComponent, h } = require('vue');

const JustifyRight = defineComponent({
  name: 'JustifyRight',
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
          h('path', {"d":"M22 2L22 22"}),
          h('path', {"d":"M13 8L17 8C17.551 8 18 8.449 18 9L18 15C18 15.551 17.551 16 17 16L13 16C12.449 16 12 15.551 12 15L12 9C12 8.449 12.449 8 13 8Z"}),
          h('path', {"d":"M3 6L7 6C7.551 6 8 6.449 8 7L8 17C8 17.551 7.551 18 7 18L3 18C2.449 18 2 17.551 2 17L2 7C2 6.449 2.449 6 3 6Z"})
        ]
      );
  }
});

module.exports = JustifyRight;
module.exports.JustifyRight = JustifyRight;
module.exports.default = JustifyRight;
