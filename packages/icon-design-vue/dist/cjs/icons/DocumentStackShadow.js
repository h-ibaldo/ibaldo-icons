'use strict';

const { defineComponent, h } = require('vue');

const DocumentStackShadow = defineComponent({
  name: 'DocumentStackShadow',
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
          h('rect', {"x":"7","y":"6","width":"14","height":"16","rx":"1","ry":"1"}),
          h('path', {"d":"M16,2H4c-.552284749830505,0-1,.447715250171314-1,1v14"}),
          h('line', {"x1":"11","y1":"10","x2":"17","y2":"10"}),
          h('line', {"x1":"11","y1":"14","x2":"17","y2":"14"}),
          h('line', {"x1":"11","y1":"18","x2":"17","y2":"18"})
        ]
      );
  }
});

module.exports = DocumentStackShadow;
module.exports.DocumentStackShadow = DocumentStackShadow;
module.exports.default = DocumentStackShadow;
