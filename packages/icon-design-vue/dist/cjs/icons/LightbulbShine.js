'use strict';

const { defineComponent, h } = require('vue');

const LightbulbShine = defineComponent({
  name: 'LightbulbShine',
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
          h('path', {"d":"M5,8.999999999998181c0,1.860514322919698.727647569439796,3.548366970489951,1.912832754629562,4.799994574650555,1.273417640260959,1.344806440469256,2.087167245370438,3.057412944159296,2.087167245370438,4.909465008449843v.290540416899603h6v-.290540416899603c0-1.852052064290547.813749605109479-3.564658567980587,2.087167245370438-4.909465008449843,1.185185185189766-1.251627604160603,1.912832754629562-2.939480251730856,1.912832754629562-4.799994574650555"}),
          h('path', {"d":"M19,8.999999999998181c0-3.865966796869543-3.134033203130457-7-7-7-3.865966796880457,0-7,3.134033203130457-7,7"}),
          h('line', {"x1":"10","y1":"21.999999999998181","x2":"14","y2":"21.999999999998181"}),
          h('path', {"d":"M12,5.999999999998181c-1.656854249400567,0-3,1.343145750599433-3,3"})
        ]
      );
  }
});

module.exports = LightbulbShine;
module.exports.LightbulbShine = LightbulbShine;
module.exports.default = LightbulbShine;
