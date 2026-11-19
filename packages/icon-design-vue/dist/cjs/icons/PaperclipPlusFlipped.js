'use strict';

const { defineComponent, h } = require('vue');

const PaperclipPlusFlipped = defineComponent({
  name: 'PaperclipPlusFlipped',
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
          h('path', {"d":"M12 6.965L5.449 13.551C3.516 15.484 3.516 18.617 5.449 20.551C7.383 22.484 10.516 22.484 12.449 20.551L20.965 12C22.344 10.621 22.344 8.383 20.965 7C19.586 5.621 17.344 5.621 15.965 7L9.621 13.379C8.793 14.207 8.793 15.551 9.621 16.379C10.449 17.207 11.793 17.207 12.621 16.379L17 11.965"}),
          h('path', {"d":"M2 5L8 5"}),
          h('path', {"d":"M5 2L5 8"})
        ]
      );
  }
});

module.exports = PaperclipPlusFlipped;
module.exports.PaperclipPlusFlipped = PaperclipPlusFlipped;
module.exports.default = PaperclipPlusFlipped;
