'use strict';

const { defineComponent, h } = require('vue');

const Tablet = defineComponent({
  name: 'Tablet',
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
          h('path', {"d":"M7 2L17 2C18.105 2 19 2.895 19 4L19 20C19 21.105 18.105 22 17 22L7 22C5.895 22 5 21.105 5 20L5 4C5 2.895 5.895 2 7 2Z"}),
          h('path', {"d":"M13 19L11 19"})
        ]
      );
  }
});

module.exports = Tablet;
module.exports.Tablet = Tablet;
module.exports.default = Tablet;
