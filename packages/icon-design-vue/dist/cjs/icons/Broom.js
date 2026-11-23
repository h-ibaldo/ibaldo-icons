'use strict';

const { defineComponent, h } = require('vue');

const Broom = defineComponent({
  name: 'Broom',
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
          h('path', {"d":"M19 13L5 13L3 22L21 22Z"}),
          h('path', {"d":"M15 22L15 18"}),
          h('path', {"d":"M9 22L9 19"}),
          h('path', {"d":"M20 11L20 13L4 13L4 11C4 9.895 4.895 9 6 9L10 9L10 4C10 2.895 10.895 2 12 2C13.105 2 14 2.895 14 4L14 9L18 9C19.105 9 20 9.895 20 11Z"})
        ]
      );
  }
});

module.exports = Broom;
module.exports.Broom = Broom;
module.exports.default = Broom;
