'use strict';

const { defineComponent, h } = require('vue');

const CircleConcentricSmall = defineComponent({
  name: 'CircleConcentricSmall',
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
          h('circle', {"cx":"11.999999976489562","cy":"11.998779299956368","r":"10"}),
          h('circle', {"cx":"11.999999976489562","cy":"11.998779299956368","r":"3"})
        ]
      );
  }
});

module.exports = CircleConcentricSmall;
module.exports.CircleConcentricSmall = CircleConcentricSmall;
module.exports.default = CircleConcentricSmall;
