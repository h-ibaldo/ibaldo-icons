'use strict';

const { defineComponent, h } = require('vue');

const CheckDoubleSquare = defineComponent({
  name: 'CheckDoubleSquare',
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
          h('rect', {"x":"1.974731440099276","y":"2.000000003885361","width":"20","height":"20","rx":"3","ry":"3"}),
          h('polyline', {"points":"17.974731440099276 9.000000003885361 12.974731440099276 15.000000003885361 9.974731440099276 12.000000003885361"}),
          h('g', {}, [
            h('line', {"x1":"12.611083979159957","y1":"10.636352542947861","x2":"13.974731440099276","y2":"9.000000003885361"}),
            h('line', {"x1":"5.974731440099276","y1":"12.000000003885361","x2":"8.974731440099276","y2":"15.000000003885361"})
          ])
        ]
      );
  }
});

module.exports = CheckDoubleSquare;
module.exports.CheckDoubleSquare = CheckDoubleSquare;
module.exports.default = CheckDoubleSquare;
