'use strict';

const { defineComponent, h } = require('vue');

const TriangleDownLeftCircle = defineComponent({
  name: 'TriangleDownLeftCircle',
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
          h('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z"}),
          h('path', {"d":"M8.289 11.289L12.711 15.711C13.27 16.27 14.223 15.992 14.395 15.223L15.66 9.535C15.816 8.82 15.18 8.184 14.465 8.34L8.777 9.605C8.008 9.777 7.73 10.73 8.289 11.289Z"})
        ]
      );
  }
});

module.exports = TriangleDownLeftCircle;
module.exports.TriangleDownLeftCircle = TriangleDownLeftCircle;
module.exports.default = TriangleDownLeftCircle;
