'use strict';

const { defineComponent, h } = require('vue');

const SparklePlusDot = defineComponent({
  name: 'SparklePlusDot',
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
          h('path', {"d":"M6 11.5C9.59 11.5 12.5 14.41 12.5 18"}),
          h('path', {"d":"M19 11.5C15.41 11.5 12.5 14.41 12.5 18"}),
          h('path', {"d":"M19 11.5C15.41 11.5 12.5 8.59 12.5 5"}),
          h('path', {"d":"M6 11.5C9.59 11.5 12.5 8.59 12.5 5"}),
          h('path', {"d":"M17 5C17 3.895 17.895 3 19 3C20.105 3 21 3.895 21 5C21 6.105 20.105 7 19 7C17.895 7 17 6.105 17 5Z"}),
          h('path', {"d":"M5.5 16L5.5 21"}),
          h('path', {"d":"M8 18.5L3 18.5"})
        ]
      );
  }
});

module.exports = SparklePlusDot;
module.exports.SparklePlusDot = SparklePlusDot;
module.exports.default = SparklePlusDot;
