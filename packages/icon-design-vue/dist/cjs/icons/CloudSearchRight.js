'use strict';

const { defineComponent, h } = require('vue');

const CloudSearchRight = defineComponent({
  name: 'CloudSearchRight',
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
          h('circle', {"cx":"11.999999976760591","cy":"16.170349124174209","r":"3.999999999999545"}),
          h('line', {"x1":"14.828430152410874","y1":"18.998779300083697","x2":"17.999999976489562","y2":"22.170349124444328"}),
          h('path', {"d":"M18.999999976489562,15.857360842925118c1.722229003900793-.446044921875,3-1.996826171875,3-3.85858154296875,0-2.20916748046875-1.790832519529431-4-4-4h-.025207519529431c.014892578119543-.1649169921875.025207519529431-.3311767578125.025207519529431-.5,0-3.03753662109375-2.462463378909888-5.5-5.5-5.5-2.138366699220569,0-3.987365722659888,1.222900390625-4.897277832029431,3.00518798828125-.034545898441138-.0006103515625-.068054199220569-.00518798828125-.102722167970569-.00518798828125-3.037536621099207,0-5.5,2.46246337890625-5.5,5.5,0,2.1363525390625,1.220458984369543,3.98394775390625,3,4.894775390625"})
        ]
      );
  }
});

module.exports = CloudSearchRight;
module.exports.CloudSearchRight = CloudSearchRight;
module.exports.default = CloudSearchRight;
