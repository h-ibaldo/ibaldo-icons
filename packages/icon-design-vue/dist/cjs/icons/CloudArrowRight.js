'use strict';

const { defineComponent, h } = require('vue');

const CloudArrowRight = defineComponent({
  name: 'CloudArrowRight',
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
          h('polyline', {"points":"8 14.999999999718057 11 17.999999999718057 8 20.999999999718057"}),
          h('line', {"x1":"2","y1":"17.999999999718057","x2":"11","y2":"17.999999999718057"}),
          h('path', {"d":"M16,17.999999999718057h2c2.209167480459655,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519540345-4-4-4h-.025207519540345c.014892578130457-.164916992180224.025207519540345-.331176757810681.025207519540345-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699219659,0-3.987365722659888,1.222900390631366-4.897277832040345,3.005187988270336-.034545898429315-.000610351560681-.068054199209655-.005187988270336-.102722167959655-.005187988270336-3.037536621100116,0-5.5,2.462463378909888-5.5,5.5,0,.169921875.020446777340112.334289550770336.036193847649884.5"})
        ]
      );
  }
});

module.exports = CloudArrowRight;
module.exports.CloudArrowRight = CloudArrowRight;
module.exports.default = CloudArrowRight;
