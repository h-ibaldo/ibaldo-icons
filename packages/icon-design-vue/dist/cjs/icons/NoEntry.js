'use strict';

const { defineComponent, h } = require('vue');

const NoEntry = defineComponent({
  name: 'NoEntry',
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
          h('circle', {"cx":"12.025268548975873","cy":"11.997565476121054","r":"10"}),
          h('rect', {"x":"6.025268548975873","y":"9.997565476121054","width":"12","height":"4"})
        ]
      );
  }
});

module.exports = NoEntry;
module.exports.NoEntry = NoEntry;
module.exports.default = NoEntry;
