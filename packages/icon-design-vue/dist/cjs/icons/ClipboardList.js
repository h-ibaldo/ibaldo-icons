'use strict';

const { defineComponent, h } = require('vue');

const ClipboardList = defineComponent({
  name: 'ClipboardList',
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
          h('path', {"d":"M16.974731440099276,4.000000003885361h2c1.104569499670106,0,2,.895430500338989,2,2v14c0,1.104569499661011-.895430500329894,2-2,2H4.974731440099276c-1.104569499659192,0-2-.895430500338989-2-2V6.000000003885361c0-1.104569499661011.895430500340808-2,2-2h2"}),
          h('rect', {"x":"6.974731440099276","y":"2.000000003885361","width":"10","height":"4","rx":"1.118033988748721","ry":"1.118033988748721"}),
          h('line', {"x1":"6.984731440099495","y1":"10.000000003885361","x2":"6.974731440099276","y2":"10.000000003885361"}),
          h('line', {"x1":"6.984731440099495","y1":"14.000000003888999","x2":"6.974731440099276","y2":"14.000000003888999"}),
          h('line', {"x1":"10.974731440099276","y1":"10.000000003885361","x2":"16.974731440099276","y2":"10.000000003885361"}),
          h('line', {"x1":"10.974731440099276","y1":"14.000000003888999","x2":"16.974731440099276","y2":"14.000000003888999"}),
          h('line', {"x1":"6.984731440099495","y1":"18.000000003888999","x2":"6.974731440099276","y2":"18.000000003888999"}),
          h('line', {"x1":"10.974731440099276","y1":"18.000000003888999","x2":"16.974731440099276","y2":"18.000000003888999"})
        ]
      );
  }
});

module.exports = ClipboardList;
module.exports.ClipboardList = ClipboardList;
module.exports.default = ClipboardList;
