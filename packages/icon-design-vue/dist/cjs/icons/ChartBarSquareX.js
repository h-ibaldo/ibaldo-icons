'use strict';

const { defineComponent, h } = require('vue');

const ChartBarSquareX = defineComponent({
  name: 'ChartBarSquareX',
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
          h('path', {"d":"M21.974731440099276,11.000000004336471v6c0,2.761423749150708-2.238576250838378,5-5,5H6.974731440099276c-2.761423749148889,0-5-2.238576250849292-5-5V7.000000004336471c0-2.761423749150708,2.238576250851111-5,5-5h6"}),
          h('line', {"x1":"17.974731440099276","y1":"6.000000004336471","x2":"21.974731440099276","y2":"2.000000004336471"}),
          h('line', {"x1":"21.974731440199321","y1":"6.000000004245521","x2":"17.974731440010146","y2":"2.00000000442742"}),
          h('rect', {"x":"5.974731440099276","y":"10.000000003885361","width":"4","height":"6"}),
          h('rect', {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"9"}),
          h('rect', {"x":"13.974731440099276","y":"11.000000003885361","width":"4","height":"5"})
        ]
      );
  }
});

module.exports = ChartBarSquareX;
module.exports.ChartBarSquareX = ChartBarSquareX;
module.exports.default = ChartBarSquareX;
