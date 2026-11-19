'use strict';

const { defineComponent, h } = require('vue');

const Music = defineComponent({
  name: 'Music',
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
          h('ellipse', {"cx":"5.5","cy":"18.999999999998181","rx":"3.5","ry":"3"}),
          h('ellipse', {"cx":"18.5","cy":"16.999999999998181","rx":"3.5","ry":"3"}),
          h('polyline', {"points":"9 18.999999999998181 9 3.999999999998181 22 1.999999999998181 22 16.999999999998181"})
        ]
      );
  }
});

module.exports = Music;
module.exports.Music = Music;
module.exports.default = Music;
