'use strict';

const { defineComponent, h } = require('vue');

const SkipForwardDoubleThick = defineComponent({
  name: 'SkipForwardDoubleThick',
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
          h('path', {"d":"M21 19L19 19C18.449 19 18 18.551 18 18L18 6C18 5.449 18.449 5 19 5L21 5C21.551 5 22 5.449 22 6L22 18C22 18.551 21.551 19 21 19Z"}),
          h('path', {"d":"M2 6.414L2 17.586C2 18.477 3.078 18.922 3.707 18.293L10 12L3.707 5.707C3.078 5.078 2 5.523 2 6.414Z"}),
          h('path', {"d":"M10 6.414L10 17.586C10 18.477 11.078 18.922 11.707 18.293L18 12L11.707 5.707C11.078 5.078 10 5.523 10 6.414Z"})
        ]
      );
  }
});

module.exports = SkipForwardDoubleThick;
module.exports.SkipForwardDoubleThick = SkipForwardDoubleThick;
module.exports.default = SkipForwardDoubleThick;
