'use strict';

const { defineComponent, h } = require('vue');

const TextAdCircle = defineComponent({
  name: 'TextAdCircle',
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
          h('path', {"d":"M6 15L8 9L9 9L11 15"}),
          h('path', {"d":"M16 9L14 9L14 15L16 15C17.105 15 18 14.105 18 13L18 11C18 9.895 17.105 9 16 9Z"}),
          h('path', {"d":"M7 14L10 14"}),
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"})
        ]
      );
  }
});

module.exports = TextAdCircle;
module.exports.TextAdCircle = TextAdCircle;
module.exports.default = TextAdCircle;
