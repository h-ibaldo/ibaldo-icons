'use strict';

const { defineComponent, h } = require('vue');

const PanelBottom = defineComponent({
  name: 'PanelBottom',
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
          h('rect', {"x":"2.050537047695798","y":"1.997697219531346","width":"20","height":"19.999864816291392","rx":"2.00000000000091","ry":"2.00000000000091","transform":"translate(24.101074094785993 23.99525925596236) rotate(-180)"}),
          h('polyline', {"points":"6.050537043445729 21.997562020008445 6.050537043445729 16.997562020008445 18.050537043445729 16.997562020008445 18.050537043445729 21.997562020008445"})
        ]
      );
  }
});

module.exports = PanelBottom;
module.exports.PanelBottom = PanelBottom;
module.exports.default = PanelBottom;
