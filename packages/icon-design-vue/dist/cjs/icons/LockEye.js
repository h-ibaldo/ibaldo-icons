'use strict';

const { defineComponent, h } = require('vue');

const LockEye = defineComponent({
  name: 'LockEye',
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
          h('line', {"x1":"12","y1":"16.010000000000218","x2":"12","y2":"16"}),
          h('path', {"d":"M12,13c-1.861755371090112,0-3.412475585940228,1.2777099609375-3.858581542969659,3,.446105957029431,1.72222900390625,1.996826171879547,3,3.858581542969659,3,1.861755371100116,0,3.412475585940228-1.27777099609375,3.858581542969659-3-.446105957029431-1.7222900390625-1.996826171869543-3-3.858581542969659-3Z"}),
          h('rect', {"x":"4","y":"10","width":"16","height":"12","rx":"1","ry":"1"}),
          h('path', {"d":"M17,10v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999995000000126-4.999994999998307h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693"})
        ]
      );
  }
});

module.exports = LockEye;
module.exports.LockEye = LockEye;
module.exports.default = LockEye;
