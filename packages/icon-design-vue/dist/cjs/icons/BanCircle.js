'use strict';

const { defineComponent, h } = require('vue');

const BanCircle = defineComponent({
  name: 'BanCircle',
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
          h('path', {"d":"M17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12C7 9.238 9.238 7 12 7C14.762 7 17 9.238 17 12Z"}),
          h('path', {"d":"M15.535 8.465L8.465 15.535"})
        ]
      );
  }
});

module.exports = BanCircle;
module.exports.BanCircle = BanCircle;
module.exports.default = BanCircle;
