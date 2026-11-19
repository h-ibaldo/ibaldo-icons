'use strict';

const { defineComponent, h } = require('vue');

const HourglassStandSquare = defineComponent({
  name: 'HourglassStandSquare',
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
          h('path', {"d":"M15 7L15 8.93C15 9.598 14.664 10.223 14.109 10.594L12 12L9.891 10.594C9.336 10.223 9 9.598 9 8.93L9 7"}),
          h('path', {"d":"M8 7L16 7"}),
          h('path', {"d":"M9 17L9 15.07C9 14.402 9.336 13.777 9.891 13.406L12 12L14.109 13.406C14.664 13.777 15 14.402 15 15.07L15 17"}),
          h('path', {"d":"M16 17L8 17"})
        ]
      );
  }
});

module.exports = HourglassStandSquare;
module.exports.HourglassStandSquare = HourglassStandSquare;
module.exports.default = HourglassStandSquare;
