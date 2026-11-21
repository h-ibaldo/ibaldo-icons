'use strict';

const { defineComponent, h } = require('vue');

const PaperPlaneUpRightNotch = defineComponent({
  name: 'PaperPlaneUpRightNotch',
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
          h('path', {"d":"M3.762 10.566L10.105 13.383C10.332 13.484 10.516 13.668 10.613 13.895L13.434 20.238C13.801 21.063 14.992 21.016 15.293 20.16L20.773 4.5C21.051 3.711 20.289 2.949 19.5 3.227L3.84 8.707C2.984 9.008 2.938 10.199 3.762 10.566Z"}),
          h('path', {"d":"M14.168 9.832L10.457 13.543"})
        ]
      );
  }
});

module.exports = PaperPlaneUpRightNotch;
module.exports.PaperPlaneUpRightNotch = PaperPlaneUpRightNotch;
module.exports.default = PaperPlaneUpRightNotch;
