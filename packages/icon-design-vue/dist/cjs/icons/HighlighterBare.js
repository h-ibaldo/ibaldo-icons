'use strict';

const { defineComponent, h } = require('vue');

const HighlighterBare = defineComponent({
  name: 'HighlighterBare',
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
          h('path', {"d":"M14.293 2.707L6.707 10.293C6.316 10.684 6.316 11.316 6.707 11.707L12.293 17.293C12.684 17.684 13.316 17.684 13.707 17.293L21.293 9.707C21.684 9.316 21.684 8.684 21.293 8.293L15.707 2.707C15.316 2.316 14.684 2.316 14.293 2.707Z"}),
          h('path', {"d":"M12.5 17.5L11 19L8 19L7 20L4 17L5 16L5 13L6.5 11.5"}),
          h('path', {"d":"M6.5 19.5L5 21L2 20L4.5 17.5"})
        ]
      );
  }
});

module.exports = HighlighterBare;
module.exports.HighlighterBare = HighlighterBare;
module.exports.default = HighlighterBare;
