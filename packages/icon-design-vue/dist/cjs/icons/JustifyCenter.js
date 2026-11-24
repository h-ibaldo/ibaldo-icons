'use strict';

const { defineComponent, h } = require('vue');

const JustifyCenter = defineComponent({
  name: 'JustifyCenter',
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
          h('path', {"d":"M22 2L22 22"}),
          h('path', {"d":"M10 6L14 6C14.551 6 15 6.449 15 7L15 17C15 17.551 14.551 18 14 18L10 18C9.449 18 9 17.551 9 17L9 7C9 6.449 9.449 6 10 6Z"})
        ]
      );
  }
});

module.exports = JustifyCenter;
module.exports.JustifyCenter = JustifyCenter;
module.exports.default = JustifyCenter;
