'use strict';

const { defineComponent, h } = require('vue');

const HourglassStandCircleCurved = defineComponent({
  name: 'HourglassStandCircleCurved',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M15 17L15 15.605C15 15.211 14.883 14.824 14.664 14.496L13.738 13.109C13.293 12.438 13.293 11.563 13.738 10.891L14.664 9.504C14.883 9.176 15 8.789 15 8.395L15 7"}),
          h('path', {"d":"M8 17L16 17"}),
          h('path', {"d":"M9 7L9 8.395C9 8.789 9.117 9.176 9.336 9.504L10.262 10.891C10.707 11.563 10.707 12.438 10.262 13.109L9.336 14.496C9.117 14.824 9 15.211 9 15.605L9 17"}),
          h('path', {"d":"M16 7L8 7"})
        ]
      );
  }
});

module.exports = HourglassStandCircleCurved;
module.exports.HourglassStandCircleCurved = HourglassStandCircleCurved;
module.exports.default = HourglassStandCircleCurved;
