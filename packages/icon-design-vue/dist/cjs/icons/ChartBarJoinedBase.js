'use strict';

const { defineComponent, h } = require('vue');

const ChartBarJoinedBase = defineComponent({
  name: 'ChartBarJoinedBase',
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
          h('polyline', {"points":"20.016630450567391 22.000000000389264 20.016630451375022 4.000000000389264 15.016630451375022 4.000000000170985 15.016630451153105 9.000000000170985 10.016630451153105 8.999999999938154 10.016630450927551 13.999999999938154 5.016630450927551 13.999999999719876 5.016630450567391 21.999999999719876"}),
          h('line', {"x1":"2.516630450567391","y1":"21.999999999628926","x2":"21.516630450567391","y2":"22.000000000480213"}),
          h('line', {"x1":"15.016630451153105","y1":"9.000000000170985","x2":"15.016630450567391","y2":"22.000000000170985"}),
          h('line', {"x1":"10.016630450927551","y1":"13.999999999938154","x2":"10.016630450567391","y2":"21.999999999938154"})
        ]
      );
  }
});

module.exports = ChartBarJoinedBase;
module.exports.ChartBarJoinedBase = ChartBarJoinedBase;
module.exports.default = ChartBarJoinedBase;
