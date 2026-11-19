'use strict';

const { defineComponent, h } = require('vue');

const PaperclipSlim = defineComponent({
  name: 'PaperclipSlim',
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
          h('path', {"d":"M17 8L17 17C17 19.762 14.762 22 12 22C9.238 22 7 19.762 7 17L7 5.5C7 3.566 8.566 2 10.5 2C12.434 2 14 3.566 14 5.5L14 15C14 16.105 13.105 17 12 17C10.895 17 10 16.105 10 15L10 8"})
        ]
      );
  }
});

module.exports = PaperclipSlim;
module.exports.PaperclipSlim = PaperclipSlim;
module.exports.default = PaperclipSlim;
