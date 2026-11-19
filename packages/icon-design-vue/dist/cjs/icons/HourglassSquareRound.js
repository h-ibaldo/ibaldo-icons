'use strict';

const { defineComponent, h } = require('vue');

const HourglassSquareRound = defineComponent({
  name: 'HourglassSquareRound',
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
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"}),
          h('path', {"d":"M14.895 10.551L12 12L9.105 10.551C8.43 10.215 8 9.523 8 8.766L8 7L16 7L16 8.766C16 9.523 15.57 10.215 14.895 10.551Z"}),
          h('path', {"d":"M9.105 13.449L12 12L14.895 13.449C15.57 13.785 16 14.477 16 15.234L16 17L8 17L8 15.234C8 14.477 8.43 13.785 9.105 13.449Z"})
        ]
      );
  }
});

module.exports = HourglassSquareRound;
module.exports.HourglassSquareRound = HourglassSquareRound;
module.exports.default = HourglassSquareRound;
