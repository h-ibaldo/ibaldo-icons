'use strict';

const { defineComponent, h } = require('vue');

const CircleConcentric = defineComponent({
  name: 'CircleConcentric',
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
          h('circle', {"cx":"11.99999997649229","cy":"11.998779299955459","r":"3.999999999995453"})
        ]
      );
  }
});

module.exports = CircleConcentric;
module.exports.CircleConcentric = CircleConcentric;
module.exports.default = CircleConcentric;
