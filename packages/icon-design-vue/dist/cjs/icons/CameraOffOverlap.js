'use strict';

const { defineComponent, h } = require('vue');

const CameraOffOverlap = defineComponent({
  name: 'CameraOffOverlap',
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
          h('path', {"d":"M4 6L7 6L9 3L15 3L17 6L20 6C21.105 6 22 6.895 22 8L22 18C22 19.105 21.105 20 20 20L4 20C2.895 20 2 19.105 2 18L2 8C2 6.895 2.895 6 4 6Z"}),
          h('path', {"d":"M7.5 12.5C7.5 10.016 9.516 8 12 8C14.484 8 16.5 10.016 16.5 12.5C16.5 14.984 14.484 17 12 17C9.516 17 7.5 14.984 7.5 12.5Z"}),
          h('path', {"d":"M22 2L2 22"})
        ]
      );
  }
});

module.exports = CameraOffOverlap;
module.exports.CameraOffOverlap = CameraOffOverlap;
module.exports.default = CameraOffOverlap;
