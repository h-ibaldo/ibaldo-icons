'use strict';

const { defineComponent, h } = require('vue');

const WindowShieldPlain = defineComponent({
  name: 'WindowShieldPlain',
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
          h('path', {"d":"M9 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 9"}),
          h('path', {"d":"M2 8L22 8"}),
          h('path', {"d":"M22 14C20.695 14 19.422 13.613 18.336 12.891L17 12L15.664 12.891C14.578 13.613 13.305 14 12 14L12 16.734C12 18.141 12.738 19.441 13.941 20.164L17 22L20.059 20.164C21.262 19.441 22 18.141 22 16.734Z"})
        ]
      );
  }
});

module.exports = WindowShieldPlain;
module.exports.WindowShieldPlain = WindowShieldPlain;
module.exports.default = WindowShieldPlain;
