'use strict';

const { defineComponent, h } = require('vue');

const ScreenTaskbar = defineComponent({
  name: 'ScreenTaskbar',
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
          h('rect', {"x":"2.02526851296625","y":"1.99756205212816","width":"20.000000000004093","height":"20","rx":".999999999997345","ry":".999999999997345","transform":"translate(24.050537025330378 23.995124104863933) rotate(-180)"}),
          h('line', {"x1":"22.025268508705267","y1":"17.997562036317504","x2":"2.025268508705267","y2":"17.997562036317504"}),
          h('rect', {"x":"6.025268508705267","y":"5.997562036317504","width":"2","height":"2"}),
          h('rect', {"x":"6.025268508705267","y":"11.997562036317504","width":"2","height":"2"})
        ]
      );
  }
});

module.exports = ScreenTaskbar;
module.exports.ScreenTaskbar = ScreenTaskbar;
module.exports.default = ScreenTaskbar;
