'use strict';

const { defineComponent, h } = require('vue');

const SkipForward = defineComponent({
  name: 'SkipForward',
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
          h('path', {"d":"M3 4.918L3 19.082C3 20.32 4.371 21.063 5.41 20.391L16.293 13.309C17.234 12.691 17.234 11.309 16.293 10.691L5.41 3.609C4.371 2.938 3 3.68 3 4.918Z"}),
          h('path', {"d":"M21 4L21 20"})
        ]
      );
  }
});

module.exports = SkipForward;
module.exports.SkipForward = SkipForward;
module.exports.default = SkipForward;
