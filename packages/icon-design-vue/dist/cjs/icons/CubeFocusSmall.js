'use strict';

const { defineComponent, h } = require('vue');

const CubeFocusSmall = defineComponent({
  name: 'CubeFocusSmall',
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
          h('polygon', {"points":"11.999999977619154 12.999996562448359 17.999999977490006 8.999996562222805 11.999999977349944 4.999996562448359 5.999999977490006 8.999996562670276 11.999999977619154 12.999996562448359"}),
          h('polyline', {"points":"5.999999977490006 8.999996562670276 5.999999977761036 14.999996562670276 11.999999977890184 18.999996562448359 17.999999977761036 14.999996562222805 17.999999977490006 8.999996562222805"}),
          h('line', {"x1":"11.999999977619154","y1":"12.999996562448359","x2":"11.999999977890184","y2":"18.999996562448359"}),
          h('polyline', {"points":"21.999999977098923 6.999996563434252 21.999999977098923 1.999996563434252 16.999999977098923 1.999996563434252"}),
          h('polyline', {"points":"6.999999977209882 1.999996563547029 1.999999977209882 1.999996563321474 1.999999976989784 6.999996563321474"}),
          h('polyline', {"points":"1.999999976989784 16.999996563434252 1.999999976989784 21.999996563434252 6.999999976989784 21.999996563434252"}),
          h('polyline', {"points":"16.999999976880645 21.999996563325112 21.999999976880645 21.999996563547029 21.999999977098923 16.999996563547029"})
        ]
      );
  }
});

module.exports = CubeFocusSmall;
module.exports.CubeFocusSmall = CubeFocusSmall;
module.exports.default = CubeFocusSmall;
