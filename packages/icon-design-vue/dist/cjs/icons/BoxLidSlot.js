'use strict';

const { defineComponent, h } = require('vue');

const BoxLidSlot = defineComponent({
  name: 'BoxLidSlot',
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
          h('rect', {"x":"2","y":"2.999999999998181","width":"20","height":"4","rx":"1","ry":"1"}),
          h('path', {"d":"M21,6.999999999998181v13c0,.552284749830505-.503679656439999,1-1.125,1H4.125c-.621320343560001,0-1.125-.447715250169495-1.125-1V6.999999999998181"}),
          h('rect', {"x":"8","y":"10.999999999998181","width":"8","height":"3","rx":"1","ry":"1"})
        ]
      );
  }
});

module.exports = BoxLidSlot;
module.exports.BoxLidSlot = BoxLidSlot;
module.exports.default = BoxLidSlot;
