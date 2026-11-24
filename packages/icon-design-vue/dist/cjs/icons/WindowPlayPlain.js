'use strict';

const { defineComponent, h } = require('vue');

const WindowPlayPlain = defineComponent({
  name: 'WindowPlayPlain',
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
          h('path', {"d":"M12.025268549803513,21.998779300087335h-7c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779300087335c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v8"}),
          h('line', {"x1":"2.025268549803513","y1":"7.998779300087335","x2":"22.025268549803513","y2":"7.998779300087335"}),
          h('polygon', {"points":"16.025268549803513 13.998779300087335 16.025268549803513 21.998779300087335 22.025268549803513 17.998779300087335 16.025268549803513 13.998779300087335"})
        ]
      );
  }
});

module.exports = WindowPlayPlain;
module.exports.WindowPlayPlain = WindowPlayPlain;
module.exports.default = WindowPlayPlain;
