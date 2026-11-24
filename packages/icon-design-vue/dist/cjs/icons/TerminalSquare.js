'use strict';

const { defineComponent, h } = require('vue');

const TerminalSquare = defineComponent({
  name: 'TerminalSquare',
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
          h('path', {"d":"M7.109 8.406L10.609 11.906L7.109 15.406"}),
          h('path', {"d":"M12.109 15.406L17.109 15.406"}),
          h('path', {"d":"M6 4L18 4C19.656 4 21 5.344 21 7L21 17C21 18.656 19.656 20 18 20L6 20C4.344 20 3 18.656 3 17L3 7C3 5.344 4.344 4 6 4Z"})
        ]
      );
  }
});

module.exports = TerminalSquare;
module.exports.TerminalSquare = TerminalSquare;
module.exports.default = TerminalSquare;
