'use strict';

const { defineComponent, h } = require('vue');

const TextO = defineComponent({
  name: 'TextO',
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
          h('path', {"d":"M12 2C7 2 4 6 4 12C4 18 7 22 12 22"}),
          h('path', {"d":"M12 22C17 22 20 18 20 12C20 6 17 2 12 2"})
        ]
      );
  }
});

module.exports = TextO;
module.exports.TextO = TextO;
module.exports.default = TextO;
