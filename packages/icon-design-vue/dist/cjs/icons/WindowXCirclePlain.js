'use strict';

const { defineComponent, h } = require('vue');

const WindowXCirclePlain = defineComponent({
  name: 'WindowXCirclePlain',
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
          h('path', {"d":"M9.999999988782292,21.998779299963644h-5c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299963644c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v5"}),
          h('line', {"x1":"1.999999988782292","y1":"7.998779299963644","x2":"21.999999988782292","y2":"7.998779299963644"}),
          h('line', {"x1":"17.999999993642632","y1":"14.998779299956368","x2":"14.999999993642632","y2":"17.998779299956368"}),
          h('line', {"x1":"14.999999993711754","y1":"14.998779299890884","x2":"17.999999993571691","y2":"17.998779300026399"}),
          h('circle', {"cx":"16.499999988791387","cy":"16.498779299962735","r":"5.499999999999545"})
        ]
      );
  }
});

module.exports = WindowXCirclePlain;
module.exports.WindowXCirclePlain = WindowXCirclePlain;
module.exports.default = WindowXCirclePlain;
