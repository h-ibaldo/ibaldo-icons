'use strict';

const { defineComponent, h } = require('vue');

const VideoOffLarge = defineComponent({
  name: 'VideoOffLarge',
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
          h('path', {"d":"M14 11.5L20.469 7.457C21.137 7.039 22 7.52 22 8.305L22 16.695C22 17.48 21.137 17.961 20.469 17.543L14 13.5Z"}),
          h('path', {"d":"M3 2.5L16 21.5"}),
          h('path', {"d":"M13.727 18.176C13.895 18 14 17.766 14 17.5L14 7.5C14 6.949 13.551 6.5 13 6.5L5.738 6.5"}),
          h('path', {"d":"M2 7.5L2 17.5C2 18.051 2.449 18.5 3 18.5L9 18.5"})
        ]
      );
  }
});

module.exports = VideoOffLarge;
module.exports.VideoOffLarge = VideoOffLarge;
module.exports.default = VideoOffLarge;
