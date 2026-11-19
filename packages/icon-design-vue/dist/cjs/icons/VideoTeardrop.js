'use strict';

const { defineComponent, h } = require('vue');

const VideoTeardrop = defineComponent({
  name: 'VideoTeardrop',
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
          h('path', {"d":"M12 15L8 15C7.449 15 7 14.551 7 14L7 10C7 9.449 7.449 9 8 9L12 9C12.551 9 13 9.449 13 10L13 14C13 14.551 12.551 15 12 15Z"}),
          h('path', {"d":"M13 11L16 9L17 9L17 15L16 15L13 13"}),
          h('path', {"d":"M12 2C6.383 2 1.848 6.633 2.004 12.285C2.148 17.504 6.496 21.852 11.715 21.996C17.367 22.152 22 17.617 22 12L22 4C22 2.895 21.105 2 20 2Z"})
        ]
      );
  }
});

module.exports = VideoTeardrop;
module.exports.VideoTeardrop = VideoTeardrop;
module.exports.default = VideoTeardrop;
