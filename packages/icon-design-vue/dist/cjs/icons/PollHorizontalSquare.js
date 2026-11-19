'use strict';

const { defineComponent, h } = require('vue');

const PollHorizontalSquare = defineComponent({
  name: 'PollHorizontalSquare',
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
          h('line', {"x1":"6.000000004160029","y1":"5.999999996371116","x2":"14.000000004160029","y2":"5.999999996371116"}),
          h('line', {"x1":"6.000000004160029","y1":"13.999999996371116","x2":"9.000000004160029","y2":"13.999999996371116"}),
          h('line', {"x1":"6.000000004160029","y1":"17.999999996371116","x2":"11.000000004160029","y2":"17.999999996371116"}),
          h('line', {"x1":"6.000000004160029","y1":"9.999999996371116","x2":"18.000000004160029","y2":"9.999999996371116"}),
          h('rect', {"x":"2.000000004160029","y":"1.999999996371116","width":"20","height":"20","rx":"2","ry":"2"})
        ]
      );
  }
});

module.exports = PollHorizontalSquare;
module.exports.PollHorizontalSquare = PollHorizontalSquare;
module.exports.default = PollHorizontalSquare;
