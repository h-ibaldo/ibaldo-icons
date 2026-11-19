'use strict';

const { defineComponent, h } = require('vue');

const CloudMusicDouble = defineComponent({
  name: 'CloudMusicDouble',
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
            h('polyline', {"points":"15.999999999994543 12.999999999718057 8.999999999998181 13.999999999718057 8.999999999998181 20.999999999718057"}),
            h('ellipse', {"cx":"7.499999999998181","cy":"20.999999999718057","rx":"1.5","ry":"1"})
          ]),
          h('g', {}, [
            h('line', {"x1":"15.999999999998181","y1":"12.999999999718057","x2":"15.999999999998181","y2":"19.999999999718057"}),
            h('ellipse', {"cx":"14.499999999998181","cy":"19.999999999718057","rx":"1.5","ry":"1"})
          ]),
          h('path', {"d":"M19.999999999998181,15.445251464567264c1.19061279296875-.692932128909888,2-1.968444824217841,2-3.445251464849207,0-2.209167480479664-1.79083251953125-4-4-4h-.02520751953125c.014892578125-.164916992180224.02520751953125-.331176757810681.02520751953125-.5,0-3.037536621090112-2.46246337890625-5.5-5.5-5.5-2.13836669921875,0-3.98736572265625,1.222900390631366-4.89727783203125,3.005187988270336-.0345458984375-.000610351560681-.06805419921875-.005187988270336-.10272216796875-.005187988270336-3.03753662109375,0-5.5,2.462463378909888-5.5,5.5,0,2.136352539069776,1.220458984375,3.983947753909888,3,4.894775390631366"})
        ]
      );
  }
});

module.exports = CloudMusicDouble;
module.exports.CloudMusicDouble = CloudMusicDouble;
module.exports.default = CloudMusicDouble;
