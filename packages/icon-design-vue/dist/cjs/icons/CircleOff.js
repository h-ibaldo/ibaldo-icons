'use strict';

const { defineComponent, h } = require('vue');

const CircleOff = defineComponent({
  name: 'CircleOff',
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
          h('path', {"d":"M3 3L21 21"}),
          h('path', {"d":"M21.109 16.109C21.676 14.855 22 13.465 22 12C22 6.477 17.523 2 12 2C10.535 2 9.145 2.324 7.891 2.891"}),
          h('path', {"d":"M2.891 7.891C2.324 9.145 2 10.535 2 12C2 17.523 6.477 22 12 22C13.465 22 14.855 21.676 16.109 21.109"})
        ]
      );
  }
});

module.exports = CircleOff;
module.exports.CircleOff = CircleOff;
module.exports.default = CircleOff;
