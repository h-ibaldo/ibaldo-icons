'use strict';

const { defineComponent, h } = require('vue');

const Calculator = defineComponent({
  name: 'Calculator',
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
          h('path', {"d":"M8 10L9 10"}),
          h('path', {"d":"M8 13L9 13"}),
          h('path', {"d":"M8 16L9 16"}),
          h('path', {"d":"M8 19L9 19"}),
          h('path', {"d":"M12 10L13 10"}),
          h('path', {"d":"M12 13L13 13"}),
          h('path', {"d":"M12 16L13 16"}),
          h('path', {"d":"M12 19L13 19"}),
          h('path', {"d":"M16 10L17 10"}),
          h('path', {"d":"M16 13L17 13"}),
          h('path', {"d":"M16 16L17 16L17 19L16 19Z"}),
          h('path', {"d":"M8 6L17 6"}),
          h('path', {"d":"M8 2L17 2C18.656 2 20 3.344 20 5L20 19C20 20.656 18.656 22 17 22L8 22C6.344 22 5 20.656 5 19L5 5C5 3.344 6.344 2 8 2Z"})
        ]
      );
  }
});

module.exports = Calculator;
module.exports.Calculator = Calculator;
module.exports.default = Calculator;
