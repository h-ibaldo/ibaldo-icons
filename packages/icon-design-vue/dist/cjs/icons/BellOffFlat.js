'use strict';

const { defineComponent, h } = require('vue');

const BellOffFlat = defineComponent({
  name: 'BellOffFlat',
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
          h('path', {"d":"M14.000000004471076,17.000000003885361v2.000002000001587c0,1.1045683950897-.895429604921446,1.999997999998413-1.999998000010237,1.999997999998413h-.000004000001354c-1.10456839509061,0-1.999997999988409-.895429604908713-1.999997999988409-1.999997999998413v-2.000002000001587"}),
          h('line', {"x1":"20.000000004471076","y1":"17.000000003885361","x2":"7.000000004471076","y2":"17.000000003885361"}),
          h('line', {"x1":"12.000000004471076","y1":"2.000000003886271","x2":"12.000000004471076","y2":"4.000000003886271"}),
          h('line', {"x1":"20.000000004471076","y1":"3.000000003886271","x2":"4.000000004471076","y2":"20.000000003885361"}),
          h('path', {"d":"M13.887146000559369,4.307373050766728c-.59393310546875-.19677734375-1.227172851569776-.307373046880457-1.887145996088293-.307373046880457-3.313720703130457,0-6,2.686279296881366-6,5.999999999999091v2.6875"}),
          h('path', {"d":"M18.000000004471076,17.000000003885361v-7c0-1.3504638671875-.451538085952052-2.592529296867724-1.204528808590112-3.595214843749091"})
        ]
      );
  }
});

module.exports = BellOffFlat;
module.exports.BellOffFlat = BellOffFlat;
module.exports.default = BellOffFlat;
