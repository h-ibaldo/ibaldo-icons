'use strict';

const { defineComponent, h } = require('vue');

const CloudMusic = defineComponent({
  name: 'CloudMusic',
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
          h('g', {}, [
            h('polyline', {"points":"14.999999999996362 13.999999999718057 11.999999999996362 12.999999999718057 11.999999999996362 19.999999999718057"}),
            h('ellipse', {"cx":"10.499999999996362","cy":"19.999999999718057","rx":"1.5","ry":"1"})
          ]),
          h('path', {"d":"M16.999999999996362,16.999999999718057h1c2.20916748046875,0,4-1.790832519540345,4-4,0-2.209167480479664-1.79083251953125-4-4-4h-.02520751953125c.014892578125-.164916992180224.02520751953125-.331176757810681.02520751953125-.5,0-3.037536621090112-2.46246337890625-5.5-5.5-5.5-2.13836669921875,0-3.98736572265625,1.222900390631366-4.89727783203125,3.005187988270336-.0345458984375-.000610351560681-.06805419921875-.005187988270336-.10272216796875-.005187988270336-3.03753662109375,0-5.5,2.462463378909888-5.5,5.5,0,2.868713378909888,2.1971435546875,5.221862792959655,5,5.474792480459655"})
        ]
      );
  }
});

module.exports = CloudMusic;
module.exports.CloudMusic = CloudMusic;
module.exports.default = CloudMusic;
