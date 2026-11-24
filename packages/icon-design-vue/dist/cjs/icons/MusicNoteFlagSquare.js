'use strict';

const { defineComponent, h } = require('vue');

const MusicNoteFlagSquare = defineComponent({
  name: 'MusicNoteFlagSquare',
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
          h('ellipse', {"cx":"8","cy":"18.499999999998181","rx":"4","ry":"3.5"}),
          h('polyline', {"points":"12 6.999999999998181 20 6.999999999998181 20 1.999999999998181 12 1.999999999998181 12 17.999999999998181"})
        ]
      );
  }
});

module.exports = MusicNoteFlagSquare;
module.exports.MusicNoteFlagSquare = MusicNoteFlagSquare;
module.exports.default = MusicNoteFlagSquare;
