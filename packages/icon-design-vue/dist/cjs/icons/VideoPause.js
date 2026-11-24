'use strict';

const { defineComponent, h } = require('vue');

const VideoPause = defineComponent({
  name: 'VideoPause',
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
          h('path', {"d":"M13 18L3 18C2.449 18 2 17.551 2 17L2 7C2 6.449 2.449 6 3 6L13 6C13.551 6 14 6.449 14 7L14 17C14 17.551 13.551 18 13 18Z"}),
          h('path', {"d":"M14 11L20.469 6.957C21.137 6.539 22 7.02 22 7.805L22 16.195C22 16.98 21.137 17.461 20.469 17.043L14 13Z"}),
          h('path', {"d":"M6 10L6 14"}),
          h('path', {"d":"M10 10L10 14"})
        ]
      );
  }
});

module.exports = VideoPause;
module.exports.VideoPause = VideoPause;
module.exports.default = VideoPause;
