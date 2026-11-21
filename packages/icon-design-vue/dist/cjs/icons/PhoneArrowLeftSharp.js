'use strict';

const { defineComponent, h } = require('vue');

const PhoneArrowLeftSharp = defineComponent({
  name: 'PhoneArrowLeftSharp',
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
          h('path', {"d":"M21.441 6L14 6"}),
          h('path', {"d":"M17 3L14 6L17 9"}),
          h('path', {"d":"M6.906 9L6.945 9.113C8.242 12.828 11.18 15.738 14.906 17"}),
          h('path', {"d":"M15 14L16.906 13L21.906 16L21.172 19.66C21.004 20.508 20.453 21.227 19.684 21.609C19.176 21.863 18.605 21.957 18.043 21.875L16.41 21.645C13.461 21.223 10.68 20.02 8.352 18.156C7.391 17.387 6.516 16.516 5.746 15.555C3.887 13.227 2.684 10.445 2.262 7.496L2.027 5.863C1.949 5.301 2.039 4.727 2.293 4.219C2.68 3.449 3.398 2.902 4.242 2.73L7.906 2L10.906 7L10 8"})
        ]
      );
  }
});

module.exports = PhoneArrowLeftSharp;
module.exports.PhoneArrowLeftSharp = PhoneArrowLeftSharp;
module.exports.default = PhoneArrowLeftSharp;
