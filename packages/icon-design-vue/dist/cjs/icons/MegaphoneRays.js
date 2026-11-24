'use strict';

const { defineComponent, h } = require('vue');

const MegaphoneRays = defineComponent({
  name: 'MegaphoneRays',
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
          h('path', {"d":"M22 4L19 7"}),
          h('path', {"d":"M19 15L22 18"}),
          h('path', {"d":"M19 11L22 11"}),
          h('path', {"d":"M16 17.277L16 4.723C16 3.957 15.172 3.473 14.504 3.855L12.039 5.262C10.047 6.402 7.793 7 5.5 7C3.566 7 2 8.566 2 10.5L2 11.5C2 13.434 3.566 15 5.5 15C7.793 15 10.047 15.598 12.039 16.738L14.504 18.145C15.172 18.527 16 18.043 16 17.277Z"}),
          h('path', {"d":"M8.375 15.316L9.637 19.727C9.82 20.363 9.34 21 8.676 21L6.754 21C6.309 21 5.914 20.703 5.793 20.273L4.215 14.758"}),
          h('path', {"d":"M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z"})
        ]
      );
  }
});

module.exports = MegaphoneRays;
module.exports.MegaphoneRays = MegaphoneRays;
module.exports.default = MegaphoneRays;
