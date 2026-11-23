'use strict';

const { defineComponent, h } = require('vue');

const Signature = defineComponent({
  name: 'Signature',
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
          h('path', {"d":"M4 14C9 11 10 8 10 6C10 2.91 6 0 6 4C6 8 9 10 9 13C9 15 9 18 6 21"}),
          h('path', {"d":"M12 13C12.699 11.664 13.797 11.043 16 13C18.203 14.957 20.313 13.648 21 11"}),
          h('path', {"d":"M2 18L22.023 18"})
        ]
      );
  }
});

module.exports = Signature;
module.exports.Signature = Signature;
module.exports.default = Signature;
