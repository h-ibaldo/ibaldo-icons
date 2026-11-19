'use strict';

const { defineComponent, h } = require('vue');

const TriangleLeftTiltedCircle = defineComponent({
  name: 'TriangleLeftTiltedCircle',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M8.289 12.711L12.711 8.289C13.27 7.73 14.223 8.008 14.395 8.777L15.66 14.465C15.816 15.18 15.18 15.816 14.465 15.66L8.777 14.395C8.008 14.223 7.73 13.27 8.289 12.711Z"})
        ]
      );
  }
});

module.exports = TriangleLeftTiltedCircle;
module.exports.TriangleLeftTiltedCircle = TriangleLeftTiltedCircle;
module.exports.default = TriangleLeftTiltedCircle;
