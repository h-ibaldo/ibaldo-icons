'use strict';

const { defineComponent, h } = require('vue');

const ButtonScribble = defineComponent({
  name: 'ButtonScribble',
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
          h('rect', {"x":"1.999999990797733","y":"7.000000000448381","width":"20","height":"10","rx":"2","ry":"2"}),
          h('polyline', {"points":"6.999999990797733 13.000000000448381 8.999999990797733 11.000000000448381 10.999999990797733 13.000000000448381 12.999999990797733 11.000000000448381 14.999999990797733 13.000000000448381 16.999999990797733 11.000000000448381"})
        ]
      );
  }
});

module.exports = ButtonScribble;
module.exports.ButtonScribble = ButtonScribble;
module.exports.default = ButtonScribble;
