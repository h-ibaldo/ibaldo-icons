'use strict';

const { defineComponent, h } = require('vue');

const CameraRetro = defineComponent({
  name: 'CameraRetro',
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
          h('path', {"d":"M20 2C21.105 2 22 3.195 22 4.668L22 19.332C22 20.805 21.105 22 20 22L4 22C2.895 22 2 20.805 2 19.332L2 4.668C2 3.195 2.895 2 4 2Z"}),
          h('path', {"d":"M7 12C7 9.238 9.238 7 12 7C14.762 7 17 9.238 17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12Z"}),
          h('path', {"d":"M2 8L9 8"}),
          h('path', {"d":"M15 8L22 8"}),
          h('path', {"d":"M18 5L19 5"}),
          h('path', {"d":"M6 8L6 2"}),
          h('path', {"d":"M9 8L9 2"})
        ]
      );
  }
});

module.exports = CameraRetro;
module.exports.CameraRetro = CameraRetro;
module.exports.default = CameraRetro;
