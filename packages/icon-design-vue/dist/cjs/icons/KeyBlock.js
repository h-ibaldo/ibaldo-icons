'use strict';

const { defineComponent, h } = require('vue');

const KeyBlock = defineComponent({
  name: 'KeyBlock',
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
          h('line', {"x1":"17.000019575949409","y1":"16.000015258789062","x2":"16.000019575949409","y2":"17.000015258789062"}),
          h('path', {"d":"M21.232197310320771,13.232254028318494l-2.46435546875-2.464477539060681c-.976318359371362-.976318359378638-2.559326171871362-.976318359378638-3.53564453125,0l-.232177734371362.23223876953125L6.000019575949409,2.000015258789062H2.000019575949409v4l2,2h3l1,1v3l3,3-.232177734378638.232238769529431c-.976318359371362.976318359369543-.976318359371362,2.559204101560681,0,3.535522460939319l2.46435546875,2.464477539060681c.976318359378638.976318359369543,2.559326171878638.976318359369543,3.53564453125,0l4.46435546875-4.464477539060681c.976318359378638-.976318359378638.976318359378638-2.559204101569776,0-3.535522460939319Z"})
        ]
      );
  }
});

module.exports = KeyBlock;
module.exports.KeyBlock = KeyBlock;
module.exports.default = KeyBlock;
