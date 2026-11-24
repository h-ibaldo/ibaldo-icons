'use strict';

const { defineComponent, h } = require('vue');

const ScreenShareXDouble = defineComponent({
  name: 'ScreenShareXDouble',
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
          h('rect', {"x":"1.974731440099276","y":"2.000000003885361","width":"10","height":"6","rx":"1","ry":"1"}),
          h('line', {"x1":"4.974731440099276","y1":"11.000000003885361","x2":"8.974731440099276","y2":"11.000000003885361"}),
          h('rect', {"x":"11.974731440099276","y":"13.000000003885361","width":"10","height":"6","rx":"1","ry":"1"}),
          h('line', {"x1":"14.974731440099276","y1":"22.000000003885361","x2":"18.974731440099276","y2":"22.000000003885361"}),
          h('line', {"x1":"21.974731440099276","y1":"2.000000003885361","x2":"16.974731440099276","y2":"7.000000003885361"}),
          h('line', {"x1":"16.974731440099276","y1":"2.000000003954483","x2":"21.974731440170217","y2":"7.000000003885361"}),
          h('line', {"x1":"6.974731440099276","y1":"17.000000003885361","x2":"1.974731440099276","y2":"22.000000003885361"}),
          h('line', {"x1":"1.974731440099276","y1":"17.000000003954483","x2":"6.974731440170217","y2":"22.000000003885361"})
        ]
      );
  }
});

module.exports = ScreenShareXDouble;
module.exports.ScreenShareXDouble = ScreenShareXDouble;
module.exports.default = ScreenShareXDouble;
