'use strict';

const { defineComponent, h } = require('vue');

const HourglassStandSandCurved = defineComponent({
  name: 'HourglassStandSandCurved',
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
          h('path', {"d":"M10 19L14 19"}),
          h('path', {"d":"M6 22L6 18.906C6 18.316 6.176 17.738 6.504 17.242L8.891 13.664C9.563 12.656 9.563 11.344 8.891 10.336L6.504 6.758C6.176 6.262 6 5.684 6 5.094L6 2"}),
          h('path', {"d":"M19 22L5 22"}),
          h('path', {"d":"M18 2L18 5.094C18 5.684 17.824 6.262 17.496 6.758L15.109 10.336C14.438 11.344 14.438 12.656 15.109 13.664L17.496 17.242C17.824 17.738 18 18.316 18 18.906L18 22"}),
          h('path', {"d":"M5 2L19 2"})
        ]
      );
  }
});

module.exports = HourglassStandSandCurved;
module.exports.HourglassStandSandCurved = HourglassStandSandCurved;
module.exports.default = HourglassStandSandCurved;
