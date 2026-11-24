'use strict';

const { defineComponent, h } = require('vue');

const MobileBag = defineComponent({
  name: 'MobileBag',
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
          h('path', {"d":"M10.000000003161404,15.998782736171052v4c0,1.104569499661011.895430500331713,2,2,2h8c1.104569499661011,0,2-.895430500338989,2-2V3.998782736171052c0-1.104569499661011-.895430500338989-2-2-2h-7"}),
          h('rect', {"x":"2.000000003161404","y":"4.998782736171052","width":"10","height":"8","rx":"1","ry":"1"}),
          h('path', {"d":"M5.000000003161404,6.998782736171052v-3.000002000000677c0-1.10456839509061.895429604910532-1.999997999999323,1.999998000001142-1.999997999999323h.000003999999535c1.10456839509061,0,1.999997999999323.895429604908713,1.999997999999323,1.999997999999323v3.000002000000677"}),
          h('line', {"x1":"22.000000003161404","y1":"5.998782736171052","x2":"15.000000003161404","y2":"5.998782736171052"}),
          h('line', {"x1":"22.000000003161404","y1":"17.998782736171052","x2":"10.000000003161404","y2":"17.998782736171052"})
        ]
      );
  }
});

module.exports = MobileBag;
module.exports.MobileBag = MobileBag;
module.exports.default = MobileBag;
