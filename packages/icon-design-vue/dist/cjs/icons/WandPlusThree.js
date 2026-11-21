'use strict';

const { defineComponent, h } = require('vue');

const WandPlusThree = defineComponent({
  name: 'WandPlusThree',
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
          h('path', {"d":"M5.5 3L5.5 8"}),
          h('path', {"d":"M8 5.5L3 5.5"}),
          h('path', {"d":"M20.5 13L20.5 16"}),
          h('path', {"d":"M22 14.5L19 14.5"}),
          h('path', {"d":"M16.5 19L16.5 22"}),
          h('path', {"d":"M18 20.5L15 20.5"}),
          h('path', {"d":"M18.816 2.816L20.23 4.23C20.66 4.66 20.672 5.352 20.258 5.789L5.789 21.16C5.359 21.621 4.629 21.629 4.184 21.184L2.77 19.77C2.34 19.34 2.328 18.648 2.742 18.211L17.211 2.84C17.641 2.379 18.371 2.371 18.816 2.816Z"}),
          h('path', {"d":"M13 7L16 10"})
        ]
      );
  }
});

module.exports = WandPlusThree;
module.exports.WandPlusThree = WandPlusThree;
module.exports.default = WandPlusThree;
