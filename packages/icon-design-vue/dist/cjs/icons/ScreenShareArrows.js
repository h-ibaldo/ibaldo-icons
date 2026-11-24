'use strict';

const { defineComponent, h } = require('vue');

const ScreenShareArrows = defineComponent({
  name: 'ScreenShareArrows',
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
          h('polyline', {"points":"16.974731440099276 7.000000003885361 18.974731440099276 9.000000003885361 20.974731440099276 7.000000003885361"}),
          h('path', {"d":"M15.974731440099276,2.000000003885361h1c1.104569499670106,0,2,.895430500338989,2,2v5"}),
          h('polyline', {"points":"6.974731440099276 17.000000003885361 4.974731440099276 15.000000003885361 2.974731440099276 17.000000003885361"}),
          h('path', {"d":"M8.974731440099276,22.000000003885361h-2c-1.104569499659192,0-2-.895430500338989-2-2v-5"})
        ]
      );
  }
});

module.exports = ScreenShareArrows;
module.exports.ScreenShareArrows = ScreenShareArrows;
module.exports.default = ScreenShareArrows;
