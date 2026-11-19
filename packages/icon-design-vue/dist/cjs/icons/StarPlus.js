'use strict';

const { defineComponent, h } = require('vue');

const StarPlus = defineComponent({
  name: 'StarPlus',
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
          h('line', {"x1":"14.974731445224279","y1":"5.000000000448381","x2":"20.974731445224279","y2":"5.000000000448381"}),
          h('line', {"x1":"17.974731445224279","y1":"2.000000000448381","x2":"17.974731445224279","y2":"8.000000000448381"}),
          h('path', {"d":"M21.459264323750176,11.039004164854305l-4.677989284929936,3.398758161051774,1.78683290783647,5.499306224129214c.37260163834344,1.146749928258942-.939903463057817,2.100340702648282-1.915387216503404,1.39161027038881l-4.677989284932664-3.398758161052683-4.677989284929026,3.398758161052683c-.975483753451044.708730432259472-2.287988854847754-.244860342129869-1.915387216503404-1.39161027038881l1.78683290783556-5.499306224129214-4.677989284928117-3.398758161051774c-.975483753451044-.7087304322622-.474151415123742-2.251672716583926.731612815087828-2.251672716583926h5.782312754185114l1.78683290783556-5.499306224124666"})
        ]
      );
  }
});

module.exports = StarPlus;
module.exports.StarPlus = StarPlus;
module.exports.default = StarPlus;
