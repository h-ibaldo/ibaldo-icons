'use strict';

const { defineComponent, h } = require('vue');

const TriangleLeftCircle = defineComponent({
  name: 'TriangleLeftCircle',
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
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"}),
          h('path', {"d":"M15 15.195L15 8.805C15 8.02 14.137 7.539 13.469 7.957L8.355 11.152C7.73 11.543 7.73 12.457 8.355 12.848L13.469 16.043C14.137 16.461 15 15.98 15 15.195Z"})
        ]
      );
  }
});

module.exports = TriangleLeftCircle;
module.exports.TriangleLeftCircle = TriangleLeftCircle;
module.exports.default = TriangleLeftCircle;
