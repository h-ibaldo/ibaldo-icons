'use strict';

const { defineComponent, h } = require('vue');

const ToolbarTop = defineComponent({
  name: 'ToolbarTop',
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
          h('rect', {"x":"1.999999980131179","y":"2.997697236106433","width":"20.000000000004547","height":"17.999864816290938","rx":".999999999995358","ry":".999999999995358","transform":"translate(23.999999961411419 23.995259287359062) rotate(180)"}),
          h('line', {"x1":"1.999999971465513","y1":"8.997697252368198","x2":"21.999999971465513","y2":"8.997697251468708"}),
          h('line', {"x1":"10.999999971336365","y1":"5.997697251964382","x2":"18.999999971336365","y2":"5.997697251604222"}),
          h('line', {"x1":"5.009999971336583","y1":"5.997697252233593","x2":"4.999999971336365","y2":"5.997697252233593"}),
          h('line', {"x1":"8.009999971336583","y1":"5.997697252098988","x2":"7.999999971336365","y2":"5.997697252098988"})
        ]
      );
  }
});

module.exports = ToolbarTop;
module.exports.ToolbarTop = ToolbarTop;
module.exports.default = ToolbarTop;
