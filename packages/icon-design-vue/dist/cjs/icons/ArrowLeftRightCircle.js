'use strict';

const { defineComponent, h } = require('vue');

const ArrowLeftRightCircle = defineComponent({
  name: 'ArrowLeftRightCircle',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M14 11L16 9L14 7"}),
          h('path', {"d":"M8 9L16 9"}),
          h('path', {"d":"M10 13L8 15L10 17"}),
          h('path', {"d":"M16 15L8 15"})
        ]
      );
  }
});

module.exports = ArrowLeftRightCircle;
module.exports.ArrowLeftRightCircle = ArrowLeftRightCircle;
module.exports.default = ArrowLeftRightCircle;
