'use strict';

const { defineComponent, h } = require('vue');

const SparklePlusDotPointed = defineComponent({
  name: 'SparklePlusDotPointed',
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
          h('path', {"d":"M12 3L10 10L3 12L10 14L12 21L14 14L21 12L14 10Z"}),
          h('path', {"d":"M17 5C17 3.895 17.895 3 19 3C20.105 3 21 3.895 21 5C21 6.105 20.105 7 19 7C17.895 7 17 6.105 17 5Z"}),
          h('path', {"d":"M5.5 16L5.5 21"}),
          h('path', {"d":"M8 18.5L3 18.5"})
        ]
      );
  }
});

module.exports = SparklePlusDotPointed;
module.exports.SparklePlusDotPointed = SparklePlusDotPointed;
module.exports.default = SparklePlusDotPointed;
