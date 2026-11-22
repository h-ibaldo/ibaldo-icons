'use strict';

const { defineComponent, h } = require('vue');

const JustifyBetweenHorizontal = defineComponent({
  name: 'JustifyBetweenHorizontal',
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
          h('path', {"d":"M12 2L12 22"}),
          h('path', {"d":"M17 8L21 8C21.551 8 22 8.449 22 9L22 15C22 15.551 21.551 16 21 16L17 16C16.449 16 16 15.551 16 15L16 9C16 8.449 16.449 8 17 8Z"}),
          h('path', {"d":"M3 6L7 6C7.551 6 8 6.449 8 7L8 17C8 17.551 7.551 18 7 18L3 18C2.449 18 2 17.551 2 17L2 7C2 6.449 2.449 6 3 6Z"})
        ]
      );
  }
});

module.exports = JustifyBetweenHorizontal;
module.exports.JustifyBetweenHorizontal = JustifyBetweenHorizontal;
module.exports.default = JustifyBetweenHorizontal;
