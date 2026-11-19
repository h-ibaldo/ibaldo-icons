'use strict';

const { defineComponent, h } = require('vue');

const Fullscreen = defineComponent({
  name: 'Fullscreen',
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
          h('polyline', {"points":"1.949462882913394 8.998779299525268 1.949462882913394 1.998779299525268 8.949462882913394 1.998779299525268"}),
          h('polyline', {"points":"21.949462883221713 14.998781724209039 21.949462883221713 21.998778260107429 14.949466347312409 21.998778260107429"})
        ]
      );
  }
});

module.exports = Fullscreen;
module.exports.Fullscreen = Fullscreen;
module.exports.default = Fullscreen;
