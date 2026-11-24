'use strict';

const { defineComponent, h } = require('vue');

const PhoneArrowBendUpSharp = defineComponent({
  name: 'PhoneArrowBendUpSharp',
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
          h('path', {"d":"M13 5L16 2L19 5"}),
          h('path', {"d":"M16 2L16 10L22 10"}),
          h('path', {"d":"M6.434 10.234L6.473 10.34C7.645 13.695 10.301 16.328 13.668 17.469"}),
          h('path', {"d":"M13.758 14.758L15.477 13.852L20 16.566L19.336 19.875C19.184 20.641 18.688 21.289 17.992 21.637C17.531 21.867 17.016 21.953 16.508 21.879L15.031 21.668C12.363 21.289 9.848 20.199 7.742 18.516C6.875 17.82 6.086 17.031 5.391 16.16C3.707 14.059 2.617 11.543 2.234 8.875L2.023 7.398C1.953 6.891 2.035 6.371 2.266 5.914C2.613 5.215 3.266 4.719 4.027 4.566L7.34 3.906L10.051 8.426L9.234 9.332"})
        ]
      );
  }
});

module.exports = PhoneArrowBendUpSharp;
module.exports.PhoneArrowBendUpSharp = PhoneArrowBendUpSharp;
module.exports.default = PhoneArrowBendUpSharp;
