'use strict';

const { defineComponent, h } = require('vue');

const ImageFrameBroken = defineComponent({
  name: 'ImageFrameBroken',
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
          h('polygon', {"points":"16.999999993269739 14.998779299945454 14.11535643858042 19.037231448382954 8.999999993269739 10.998779299945454 1.999999993269739 21.998779299945454 11.999999993269739 21.998779299945454 15.999999993269739 21.998779299945454 21.999999993269739 21.998779299945454 16.999999993269739 14.998779299945454"}),
          h('circle', {"cx":"15.499999993269739","cy":"8.498779299956368","r":"2.5"}),
          h('polyline', {"points":"1.999999993269739 14.998779299956368 1.999999993269739 1.998779299956368 21.999999993269739 1.998779299956368 21.999999993269739 14.998779299956368"})
        ]
      );
  }
});

module.exports = ImageFrameBroken;
module.exports.ImageFrameBroken = ImageFrameBroken;
module.exports.default = ImageFrameBroken;
