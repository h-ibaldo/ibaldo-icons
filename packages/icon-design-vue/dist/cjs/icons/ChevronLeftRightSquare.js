'use strict';

const { defineComponent, h } = require('vue');

const ChevronLeftRightSquare = defineComponent({
  name: 'ChevronLeftRightSquare',
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
          h('rect', {"x":"2.050537039341634","y":"2.99756204273308","width":"20","height":"18.000000000400178","rx":"1.999999999994095","ry":"1.999999999994095","transform":"translate(24.101074078167692 23.995124086384191) rotate(-180)"}),
          h('polyline', {"points":"9.050537043445729 14.997562036226554 6.050537043445729 11.997562036226554 9.050537043445729 8.997562036226554"}),
          h('polyline', {"points":"15.050537043445729 14.997562036226554 18.050537043445729 11.997562036157433 15.050537043445729 8.997562036226554"})
        ]
      );
  }
});

module.exports = ChevronLeftRightSquare;
module.exports.ChevronLeftRightSquare = ChevronLeftRightSquare;
module.exports.default = ChevronLeftRightSquare;
