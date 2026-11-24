'use strict';

const { defineComponent, h } = require('vue');

const OptionsCheckAsterisk = defineComponent({
  name: 'OptionsCheckAsterisk',
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
          h('path', {"d":"M16 22C12.688 22 10 19.313 10 16C10 12.688 12.688 10 16 10C19.313 10 22 12.688 22 16C22 19.313 19.313 22 16 22Z"}),
          h('path', {"d":"M5.875 7.527L6.977 8.625L9.176 6.426"}),
          h('path', {"d":"M13 7.027C12.746 4.223 10.395 2.027 7.523 2.027C4.488 2.027 2.023 4.488 2.023 7.527C2.023 10.395 4.223 12.746 7.023 13"}),
          h('path', {"d":"M18 15L14 15"}),
          h('path', {"d":"M16 15.5L16 13"}),
          h('path', {"d":"M18 18C17 17.5 16 16.5 16 15"}),
          h('path', {"d":"M14 18C15 17.5 16 16.5 16 15"})
        ]
      );
  }
});

module.exports = OptionsCheckAsterisk;
module.exports.OptionsCheckAsterisk = OptionsCheckAsterisk;
module.exports.default = OptionsCheckAsterisk;
