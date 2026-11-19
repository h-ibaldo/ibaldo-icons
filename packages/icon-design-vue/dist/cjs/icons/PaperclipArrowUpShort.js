'use strict';

const { defineComponent, h } = require('vue');

const PaperclipArrowUpShort = defineComponent({
  name: 'PaperclipArrowUpShort',
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
          h('path', {"d":"M13 15L19.172 8.828C20.277 7.723 20.277 5.934 19.172 4.828C18.066 3.723 16.277 3.723 15.172 4.828L6.449 13.551C4.516 15.484 4.516 18.617 6.449 20.551C8.383 22.484 11.516 22.484 13.449 20.551L21.895 12.105"}),
          h('path', {"d":"M8 5L5 2L2 5"}),
          h('path', {"d":"M5 9L5 2"})
        ]
      );
  }
});

module.exports = PaperclipArrowUpShort;
module.exports.PaperclipArrowUpShort = PaperclipArrowUpShort;
module.exports.default = PaperclipArrowUpShort;
