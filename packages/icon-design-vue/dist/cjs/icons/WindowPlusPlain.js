'use strict';

const { defineComponent, h } = require('vue');

const WindowPlusPlain = defineComponent({
  name: 'WindowPlusPlain',
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
          h('path', {"d":"M10.999999993642632,21.998779299956368h-6c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249491516,0,3,1.343145750506665,3,3v6"}),
          h('line', {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368"}),
          h('line', {"x1":"17.999999993642632","y1":"13.998779299956368","x2":"17.999999993642632","y2":"21.998779299956368"}),
          h('line', {"x1":"21.999999993642632","y1":"17.998779299956368","x2":"13.999999993642632","y2":"17.998779299956368"})
        ]
      );
  }
});

module.exports = WindowPlusPlain;
module.exports.WindowPlusPlain = WindowPlusPlain;
module.exports.default = WindowPlusPlain;
