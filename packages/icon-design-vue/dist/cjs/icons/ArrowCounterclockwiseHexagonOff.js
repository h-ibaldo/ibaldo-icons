'use strict';

const { defineComponent, h } = require('vue');

const ArrowCounterclockwiseHexagonOff = defineComponent({
  name: 'ArrowCounterclockwiseHexagonOff',
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
          h('polyline', {"points":"2 6.119926759391092 2.972127382352483 10 6.852200622957753 9.027872617640242"}),
          h('line', {"x1":"22","y1":"4","x2":"2","y2":"20"}),
          h('g', {}, [
            h('path', {"d":"M18.90380859375,6.476928710930224l-1.36016845703125-2.4482421875c-.35272216796875-.634887695307953-1.02197265625-1.028686523430224-1.748291015625-1.028686523430224h-7.64642333984375c-.726318359375,0-1.39556884765625.393798828122272-1.748291015625,1.028686523430224l-3.3173828125,5.971313476569776"}),
            h('line', {"x1":"3.083251953125","y1":"14","x2":"5.0576171875","y2":"17.553955078121362"}),
            h('path', {"d":"M7.599609375,20.92041015625c.17657470703125.050537109371362.360473632810681.07958984375.54931640625.07958984375h7.64642333984375c.726318359375,0,1.39556884765625-.393798828128638,1.748291015625-1.028686523441138l3.888916015625-7c.3355712890625-.604125976558862.3355712890625-1.338500976558862,0-1.942626953128638l-.45184326171875-.813354492180224"})
          ])
        ]
      );
  }
});

module.exports = ArrowCounterclockwiseHexagonOff;
module.exports.ArrowCounterclockwiseHexagonOff = ArrowCounterclockwiseHexagonOff;
module.exports.default = ArrowCounterclockwiseHexagonOff;
