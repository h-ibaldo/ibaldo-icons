'use strict';

const { defineComponent, h } = require('vue');

const ScreenDockDots = defineComponent({
  name: 'ScreenDockDots',
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
          h('rect', {"x":"2.050537039181108","y":"3.997562051049499","width":"20","height":"16.000000000002274","rx":"1.999999999970797","ry":"1.999999999970797"}),
          h('rect', {"x":"16.050537043281111","y":"14.997562035462579","width":"2","height":"1","transform":"translate(34.101074085885664 30.995124071669508) rotate(-180)"}),
          h('rect', {"x":"11.050537043281111","y":"14.997562035238843","width":"2","height":"1","transform":"translate(24.101074085857476 30.995124071025678) rotate(-180)"}),
          h('rect', {"x":"6.050537043281111","y":"14.997562035013289","width":"2","height":"1","transform":"translate(14.101074085857476 30.995124070347195) rotate(-180)"})
        ]
      );
  }
});

module.exports = ScreenDockDots;
module.exports.ScreenDockDots = ScreenDockDots;
module.exports.default = ScreenDockDots;
