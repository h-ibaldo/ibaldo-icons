'use strict';

const { defineComponent, h } = require('vue');

const CloudLightbulb = defineComponent({
  name: 'CloudLightbulb',
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
          h('circle', {"cx":"11.999999999998181","cy":"14.899230956738393","r":"4"}),
          h('line', {"x1":"10.999999999998181","y1":"21.899230956738393","x2":"12.999999999998181","y2":"21.899230956738393"}),
          h('path', {"d":"M18.999999999998181,16.858581542677712c1.72222900390625-.446044921860448,3-1.996826171860448,3-3.858581542959655,0-2.209167480479664-1.79083251953125-4-4-4h-.02520751953125c.014892578125-.164916992180224.02520751953125-.331176757810681.02520751953125-.5,0-3.037536621090112-2.46246337890625-5.5-5.5-5.5-2.13836669921875,0-3.98736572265625,1.222900390631366-4.89727783203125,3.005187988270336-.0345458984375-.000610351560681-.06805419921875-.005187988270336-.10272216796875-.005187988270336-3.03753662109375,0-5.5,2.462463378909888-5.5,5.5,0,2.136352539069776,1.220458984375,3.983947753909888,3,4.894775390631366"})
        ]
      );
  }
});

module.exports = CloudLightbulb;
module.exports.CloudLightbulb = CloudLightbulb;
module.exports.default = CloudLightbulb;
