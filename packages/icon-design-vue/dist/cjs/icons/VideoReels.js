'use strict';

const { defineComponent, h } = require('vue');

const VideoReels = defineComponent({
  name: 'VideoReels',
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
          h('path', {"d":"M20.379 10.281L16 13.75L16 12C16 10.895 15.105 10 14 10L4 10C2.895 10 2 10.895 2 12L2 20C2 21.105 2.895 22 4 22L14 22C15.105 22 16 21.105 16 20L16 18.25L20.379 21.719C21.035 22.234 22 21.77 22 20.934L22 11.066C22 10.23 21.035 9.766 20.379 10.281Z"}),
          h('path', {"d":"M11.75 2.105C10.82 2.105 9.855 2.5 9.141 3.129C8.773 3.449 8.227 3.449 7.859 3.129C7.145 2.5 6.18 2.105 5.25 2.105C3.453 2.105 2 3.559 2 5.355C2 7.148 3.453 8.605 5.25 8.605C6.18 8.605 7.145 8.211 7.859 7.582C8.227 7.262 8.773 7.262 9.141 7.582C9.855 8.211 10.82 8.605 11.75 8.605C13.547 8.605 15 7.148 15 5.355C15 3.559 13.547 2.105 11.75 2.105Z"})
        ]
      );
  }
});

module.exports = VideoReels;
module.exports.VideoReels = VideoReels;
module.exports.default = VideoReels;
