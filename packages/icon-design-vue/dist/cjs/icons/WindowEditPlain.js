'use strict';

const { defineComponent, h } = require('vue');

const WindowEditPlain = defineComponent({
  name: 'WindowEditPlain',
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
          h('path', {"d":"M7 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 9"}),
          h('path', {"d":"M2 7L22 7"}),
          h('path', {"d":"M7 12L12 12"}),
          h('path', {"d":"M7 16L9 16"}),
          h('path', {"d":"M20.414 12.414L20.586 12.586C21.367 13.367 21.367 14.633 20.586 15.414L14 22L11 22L11 19L17.586 12.414C18.367 11.633 19.633 11.633 20.414 12.414Z"}),
          h('path', {"d":"M16 14L19 17"})
        ]
      );
  }
});

module.exports = WindowEditPlain;
module.exports.WindowEditPlain = WindowEditPlain;
module.exports.default = WindowEditPlain;
