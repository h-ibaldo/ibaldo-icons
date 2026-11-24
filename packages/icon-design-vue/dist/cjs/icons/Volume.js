'use strict';

const { defineComponent, h } = require('vue');

const Volume = defineComponent({
  name: 'Volume',
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
          h('path', {"d":"M5 9L5 15C5 15.555 5.449 16 6 16L10 16L17.445 20.965C18.109 21.406 19 20.93 19 20.133L19 3.867C19 3.07 18.109 2.594 17.445 3.035L10 8L6 8C5.449 8 5 8.445 5 9Z"})
        ]
      );
  }
});

module.exports = Volume;
module.exports.Volume = Volume;
module.exports.default = Volume;
