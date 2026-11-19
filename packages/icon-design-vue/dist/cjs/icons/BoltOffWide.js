'use strict';

const { defineComponent, h } = require('vue');

const BoltOffWide = defineComponent({
  name: 'BoltOffWide',
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
          h('line', {"x1":"20.999999976489562","y1":"20.998779299956368","x2":"2.999999976489562","y2":"2.998779299956368"}),
          h('polyline', {"points":"14.320007300710131 14.318786624175118 18.999999976489562 9.998840335112618 13.999999976489562 9.998779299956368 17.999999976489562 1.998779299956368 8.999999976489562 1.998779299956368 6.999999976489562 6.998779299956368"}),
          h('polyline', {"points":"5.571411109309338 10.570190432768868 4.999999976489562 11.998779299956368 6.999999976489562 11.998779299956368"}),
          h('polyline', {"points":"8.749999976489562 13.748779299956368 5.999999976489562 21.998840335112618 11.720031714779907 16.718811038237618"})
        ]
      );
  }
});

module.exports = BoltOffWide;
module.exports.BoltOffWide = BoltOffWide;
module.exports.default = BoltOffWide;
