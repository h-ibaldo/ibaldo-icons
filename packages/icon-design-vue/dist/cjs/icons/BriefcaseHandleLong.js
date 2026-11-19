'use strict';

const { defineComponent, h } = require('vue');

const BriefcaseHandleLong = defineComponent({
  name: 'BriefcaseHandleLong',
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
          h('rect', {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1"}),
          h('path', {"d":"M8,8.999999999998181V3.999999999998181c0-.552284749830505.447715250169495-1,1-1h6c.552284749830505,0,1,.447715250169495,1,1v5"})
        ]
      );
  }
});

module.exports = BriefcaseHandleLong;
module.exports.BriefcaseHandleLong = BriefcaseHandleLong;
module.exports.default = BriefcaseHandleLong;
