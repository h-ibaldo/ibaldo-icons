'use strict';

const { defineComponent, h } = require('vue');

const CircleOverlap = defineComponent({
  name: 'CircleOverlap',
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
          h('path', {"d":"M15.922 8C15.434 4.609 12.527 2 9 2C5.133 2 2 5.133 2 9C2 12.867 5.133 16 9 16C11.793 16 14.195 14.363 15.32 12"}),
          h('path', {"d":"M8.078 16C8.566 19.391 11.473 22 15 22C18.867 22 22 18.867 22 15C22 11.133 18.867 8 15 8C12.207 8 9.805 9.637 8.68 12"})
        ]
      );
  }
});

module.exports = CircleOverlap;
module.exports.CircleOverlap = CircleOverlap;
module.exports.default = CircleOverlap;
