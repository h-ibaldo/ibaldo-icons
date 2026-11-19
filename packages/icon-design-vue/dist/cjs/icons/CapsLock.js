'use strict';

const { defineComponent, h } = require('vue');

const CapsLock = defineComponent({
  name: 'CapsLock',
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
          h('polygon', {"points":"20.999999977100742 9.999996563434252 11.999999977100742 1.999996563434252 2.999999977100742 9.999996563434252 7.999999977100742 9.999996563434252 7.999999977100742 14.999996563434252 15.999999977100742 14.999996563434252 15.999999977100742 9.999996563434252 20.999999977100742 9.999996563434252"}),
          h('rect', {"x":"7.999999977100742","y":"18.999996563434252","width":"8","height":"3"})
        ]
      );
  }
});

module.exports = CapsLock;
module.exports.CapsLock = CapsLock;
module.exports.default = CapsLock;
