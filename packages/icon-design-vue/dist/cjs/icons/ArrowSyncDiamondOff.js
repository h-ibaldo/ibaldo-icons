'use strict';

const { defineComponent, h } = require('vue');

const ArrowSyncDiamondOff = defineComponent({
  name: 'ArrowSyncDiamondOff',
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
          h('polyline', {"points":"22 11.000000000811269 19.99999999981992 13.000000000631189 18 11.000000000451109"}),
          h('line', {"x1":"6","y1":"2","x2":"18","y2":"22"}),
          h('g', {}, [
            h('line', {"x1":"7.862060546875","y1":"5.103515625","x2":"5","y2":"7.25"}),
            h('path', {"d":"M20,13v-4c0-.629638671869543-.29638671875-1.222412109369543-.79998779296875-1.60009765625l-5.999938964845569-4.5c-.711120605466931-.533203125-1.688903808591931-.533203125-2.400024414060681,0l-.04144287109375.031127929692047"})
          ]),
          h('polyline', {"points":"2 12.999999999821739 4.000000000178261 11 5.999999999998181 13.000000000181899"}),
          h('g', {}, [
            h('line', {"x1":"16.137939453125","y1":"18.896484375631189","x2":"19","y2":"16.750000000631189"}),
            h('path', {"d":"M4,11.000000000631189v4c0,.629638671880457.29638671875,1.222412109380457.79998779296875,1.60009765625l5.999938964841931,4.5c.711120605470569.533203125,1.688903808595569.533203125,2.400024414064319,0l.04144287109375-.031127929680224"})
          ])
        ]
      );
  }
});

module.exports = ArrowSyncDiamondOff;
module.exports.ArrowSyncDiamondOff = ArrowSyncDiamondOff;
module.exports.default = ArrowSyncDiamondOff;
